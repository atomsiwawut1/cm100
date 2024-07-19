"use client";
import * as React from "react";
import { GridToolbarContainer, GridToolbarFilterButton } from "@mui/x-data-grid";
import Link from "next/link";
import Fab from "@mui/material/Fab";
import {
    Add,
    AddShoppingCart,
    AssignmentReturn,
    Delete,
    Edit,
    NewReleases,
    Star,
  } from "@mui/icons-material";

interface CustomToolbarWrapperProps {
  setFilterButtonEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
}

const CustomToolbarWrapper: React.FC<CustomToolbarWrapperProps> = ({ setFilterButtonEl }) => (
  <GridToolbarContainer>
    <GridToolbarFilterButton ref={setFilterButtonEl} />
    <Link href="/stock/add">
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
        }}
      >
        <Add />
      </Fab>
    </Link>
  </GridToolbarContainer>
);

export default CustomToolbarWrapper;
