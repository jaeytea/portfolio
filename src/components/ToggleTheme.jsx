import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ToggleTheme({ mode, setMode }) {
  return (
    <IconButton
      disableRipple
      size="small"
      onClick={() => setMode((prev) => (prev === "dark" ? "light" : "dark"))}
      sx={{
        p: 0,
        width: 28,
        height: 28,
        minWidth: 28,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        lineHeight: 1,
        mr: 1,
        color: mode === "dark" ? "#39d353" : "#C76A8A",
        transition: "all .3s",
        flexShrink: 0,
        "&:hover": {
          bgcolor: "transparent",
          transform: "rotate(20deg)",
        },
      }}
    >
      {mode === "dark" ? (
        <LightModeIcon fontSize="small" />
      ) : (
        <DarkModeIcon fontSize="small" />
      )}
    </IconButton>
  );
}
