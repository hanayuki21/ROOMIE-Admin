import React from "react";
import { Card, CardContent, Typography, Tooltip, Box } from "@mui/material";

const formatTime = (timeString) => {
    if (!timeString) return "Unknown";
    
    const [hours, minutes] = timeString.split(":");
    let hourNum = parseInt(hours, 10);
    let period = hourNum >= 12 ? "PM" : "AM";
    
    // Convert to 12-hour format
    hourNum = hourNum % 12 || 12;
    
    return `${hourNum}:${minutes} ${period}`;
};

const CustomEventCard = ({ event }) => {
    const { extendedProps } = event;

    // Check if the booking status is Pending
    if (extendedProps.status === "Pending") {
        return null; // Do not render anything if status is Pending
    }

    return (
        <Tooltip
            title={
                <Card sx={{ padding: "10px", maxWidth: 250 }}>
                    <CardContent>
                        <Typography variant="body2">
                            <strong>Room:</strong> {extendedProps.room_name}
                        </Typography>
                        <Typography variant="body2">
                            <strong>Subject:</strong>{" "}
                            {extendedProps.subject_name || extendedProps.subject_code}
                        </Typography>
                        <Box sx={{ display: "block" }}>
                            <Typography variant="body2" sx={{ display: "block" }}>
                                <strong>Time:</strong> {formatTime(extendedProps.time_in)} - {formatTime(extendedProps.time_out)}
                            </Typography>
                            <Typography variant="body2" sx={{ display: "block", marginTop: "2px" }}>
                                <strong>Professor:</strong> {extendedProps.full_name}
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            }
            arrow
            placement="top"
        >
            <Card
                sx={{
                    backgroundColor: event.color,
                    color: "black",
                    height: "100%",
                    width: "100%",
                    margin: 0,
                    padding: "2px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    overflow: "hidden",
                    minHeight: "100%",
                    "& .MuiCardContent-root": {
                        padding: "4px !important",
                    },
                }}
            >
                <CardContent sx={{ width: "100%" }}>
                    <Typography
                        variant="caption"
                        sx={{
                            fontWeight: "bold",
                            display: "block",
                            fontSize: "0.7rem",
                            lineHeight: 1.2,
                        }}
                    >
                        {extendedProps.room_name}
                    </Typography>
                    <Typography
                        variant="caption"
                        sx={{
                            display: "block",
                            fontSize: "0.65rem",
                            lineHeight: 1.1,
                        }}
                    >
                        {extendedProps.subject_name || extendedProps.subject_code}
                    </Typography>
                </CardContent>
            </Card>
        </Tooltip>
    );
};

export default CustomEventCard;
