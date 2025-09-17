import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  TablePagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Chip,
  LinearProgress,
} from "@mui/material";
import ambulanceGif from "../../assets/am.gif"; // adjust path if needed

// Routes with hops & base time (minutes)
const routes = [
  {
    start: "Dhanmondi",
    end: "Farmgate",
    hops: ["Kalabagan", "Science Lab", "Russell Square"],
    baseTime: 2,
  },
  {
    start: "Farmgate",
    end: "Shahbagh",
    hops: ["Banglamotor", "Kawran Bazar", "Elephant Road"],
    baseTime: 1,
  },
  {
    start: "Karwan Bazar",
    end: "Mohammadpur",
    hops: ["Panthapath", "Asad Gate", "Shyamoli"],
    baseTime: 1.5,
  },
  {
    start: "Banani",
    end: "Gulshan",
    hops: ["Kakoli", "Gulshan-1", "Gulshan-2"],
    baseTime: 1,
  },
  {
    start: "Uttara",
    end: "Airport",
    hops: ["Azampur", "Jasimuddin", "Airport Terminal"],
    baseTime: 2,
  },
  {
    start: "Mirpur",
    end: "Dhanmondi",
    hops: ["Kazipara", "Shewrapara"],
    baseTime: 4,
  },
  {
    start: "Mohakhali",
    end: "Bashundhara",
    hops: ["Kuril", "Rampura"],
    baseTime: 5,
  },
];

// Ambulance list (8 dummy)
const initialAmbulances = [
  { id: 1, name: "Ambulance A", location: "Dhanmondi" },
  { id: 2, name: "Ambulance B", location: "Farmgate" },
  { id: 3, name: "Ambulance C", location: "Karwan Bazar" },
  { id: 4, name: "Ambulance D", location: "Shahbagh" },
  { id: 5, name: "Ambulance E", location: "Uttara" },
  { id: 6, name: "Ambulance F", location: "Banani" },
  { id: 7, name: "Ambulance G", location: "Mirpur" },
  { id: 8, name: "Ambulance H", location: "Mohakhali" },
];

const formatMMSS = (seconds) => {
  if (seconds == null) return "--:--";
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
};

const BookAmbulance = () => {
  const [ambulances] = useState(initialAmbulances);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // booking / tracking states
  const [bookOpen, setBookOpen] = useState(false);
  const [bookedAmbulance, setBookedAmbulance] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [hopsSequence, setHopsSequence] = useState([]);
  const [totalSeconds, setTotalSeconds] = useState(null);
  const [remainingSeconds, setRemainingSeconds] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [arrived, setArrived] = useState(false);

  // Pagination
  const handleChangePage = (e, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  // Book ambulance (only if none booked or finished)
  const handleBook = (amb) => {
    if (bookedAmbulance && !arrived) return; // block new booking until finished

    setBookedAmbulance(amb);

    const route =
      routes.find((r) => r.start === amb.location || r.end === amb.location) ||
      null;

    if (route) {
      const reversed = route.end === amb.location;
      const seq = reversed
        ? [route.end, ...[...route.hops].reverse(), route.start]
        : [route.start, ...route.hops, route.end];

      setSelectedRoute({ ...route, reversed });
      setHopsSequence(seq);

      const tot = route.baseTime * 60;
      setTotalSeconds(tot);
      setRemainingSeconds(tot);
    } else {
      setSelectedRoute(null);
      setHopsSequence([amb.location]);
      setTotalSeconds(null);
      setRemainingSeconds(null);
    }

    setIsRunning(false);
    setArrived(false);
    setBookOpen(true);
  };

  const handleStart = () => {
    if (!totalSeconds) return;
    setIsRunning(true);
  };

  // Timer effect
  useEffect(() => {
    let timer = null;
    if (isRunning && remainingSeconds != null && remainingSeconds > 0) {
      timer = setInterval(() => {
        setRemainingSeconds((prev) => {
          const next = Math.max(prev - 1, 0);
          return next;
        });
      }, 1000);
    }
    if (remainingSeconds === 0 && isRunning) {
      setIsRunning(false);
      setArrived(true);
    }
    return () => clearInterval(timer);
  }, [isRunning, remainingSeconds]);

  // derived progress
  const elapsedSeconds =
    totalSeconds != null && remainingSeconds != null
      ? totalSeconds - remainingSeconds
      : 0;
  const progressPercent = totalSeconds
    ? Math.min((elapsedSeconds / totalSeconds) * 100, 100)
    : 0;

  const segments = Math.max(hopsSequence.length - 1, 1);
  const secondsPerSegment = totalSeconds ? totalSeconds / segments : 0;
  const currentSegmentIndex =
    totalSeconds && secondsPerSegment > 0
      ? Math.min(Math.floor(elapsedSeconds / secondsPerSegment), segments - 1)
      : 0;

  return (
    <Box sx={{ maxWidth: 1100, margin: "auto", mt: 5, p: 3 }}>
      <Paper sx={{ p: 2, borderRadius: 3, boxShadow: 5 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          🚑 Ambulance Booking System
        </Typography>

        {/* Ambulance Table */}
        <TableContainer component={Paper} sx={{ borderRadius: 2, mb: 3 }}>
          <Table>
            <TableHead sx={{ bgcolor: "#f5f5f5" }}>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Location</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ambulances
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((a) => (
                  <TableRow key={a.id}>
                    <TableCell>{a.id}</TableCell>
                    <TableCell>{a.name}</TableCell>
                    <TableCell>{a.location}</TableCell>
                    <TableCell align="center">
                      {bookedAmbulance?.id === a.id && !arrived ? (
                        <Button
                          size="small"
                          variant="outlined"
                          onClick={() => setBookOpen(true)}
                        >
                          View
                        </Button>
                      ) : (
                        <Button
                          size="small"
                          variant="contained"
                          sx={{
                            bgcolor: "maroon",
                            "&:hover": { bgcolor: "#660000" },
                          }}
                          onClick={() => handleBook(a)}
                          disabled={bookedAmbulance && !arrived}
                        >
                          Book
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10]}
            component="div"
            count={ambulances.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Paper>

      {/* Booking Popup */}
      <Dialog
        open={bookOpen}
        onClose={() => setBookOpen(false)}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>
          {bookedAmbulance
            ? `Ambulance - ${bookedAmbulance.name}`
            : "Booking"}
        </DialogTitle>
        <DialogContent dividers>
          {arrived ? (
            <Box sx={{ textAlign: "center", p: 5 }}>
              <Typography variant="h4">🎉 Hurrah! Arrived</Typography>
            </Box>
          ) : bookedAmbulance ? (
            <Box>
              {/* Route info */}
              {selectedRoute && (
                <Typography variant="subtitle1" gutterBottom>
                  Route:{" "}
                  {selectedRoute.reversed
                    ? `${selectedRoute.end} - ${selectedRoute.start}`
                    : `${selectedRoute.start} - ${selectedRoute.end}`}{" "}
                  | Base Time: {selectedRoute.baseTime} min
                </Typography>
              )}

              {/* Hops */}
              <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap" }}>
                {hopsSequence.map((point, idx) => {
                  const completed = idx <= currentSegmentIndex - 1;
                  const isCurrent = idx === currentSegmentIndex;
                  return (
                    <Chip
                      key={idx}
                      label={
                        completed
                          ? `✅ ${point}`
                          : isCurrent
                          ? `🔵 ${point}`
                          : point
                      }
                      sx={{
                        bgcolor: completed
                          ? "#e6f8ec"
                          : isCurrent
                          ? "#e8f3ff"
                          : "#fafafa",
                      }}
                    />
                  );
                })}
              </Stack>

              {/* Progress bar */}
              <LinearProgress
                variant="determinate"
                value={progressPercent}
                sx={{ height: 10, borderRadius: 5, mb: 2 }}
              />

              {/* Moving ambulance */}
              <Box
                sx={{
                  position: "relative",
                  height: 220,
                  bgcolor: "#fafafa",
                  borderRadius: 2,
                  border: "1px dashed #ccc",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: `${progressPercent}%`,
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    transition: "left 1s linear",
                  }}
                >
                  <Typography fontWeight="bold">{bookedAmbulance.name}</Typography>
                  <Typography variant="caption">
                    ETA: {formatMMSS(remainingSeconds)}
                  </Typography>
                  <img src={ambulanceGif} alt="ambulance" width={200} />
                </Box>
              </Box>
            </Box>
          ) : null}
        </DialogContent>
        <DialogActions>
          {!arrived && !isRunning && totalSeconds && (
            <Button
              onClick={handleStart}
              variant="contained"
              sx={{ bgcolor: "maroon", "&:hover": { bgcolor: "#800000" } }}
            >
              Start
            </Button>
          )}
          <Button onClick={() => setBookOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default BookAmbulance;
