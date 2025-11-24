import React from 'react';
import { Toaster } from "react-hot-toast";

const ReactToaster = () => {
    return (
        

<Toaster
  position="top-center"
  reverseOrder={false}
  toastOptions={{
    // Global default styles
    style: {
      fontSize: "16px",          // text size
      padding: "12px 18px",      // size
      borderRadius: "10px",      // round corners
      background: "#333",        // toaster bg
      color: "#fff",             // font color
    },

    // Customize success toast
    success: {
      style: {
        background: "#22c55e",   // green
        color: "white",
        fontWeight: "600",
        fontSize: "16px",
      },
      iconTheme: {
        primary: "white",
        secondary: "#22c55e",
      },
    },

    // Customize error toast
    error: {
      style: {
        background: "#ef4444",   // red
        color: "white",
        fontWeight: "600",
        fontSize: "16px",
      },
      iconTheme: {
        primary: "white",
        secondary: "#ef4444",
      },
    },
  }}
/>

    );
};

export default ReactToaster;