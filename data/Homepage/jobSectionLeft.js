import React from "react"

import WhatshotIcon from '@mui/icons-material/Whatshot';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';

const jobItem = [
  {
    id: 1,
    icon: <WhatshotIcon />,
    title: "Discover and contribute to social impact projects you care about effortlessly",
    subtitle: `Meet like-minded people and be part of the social impact community.
    Find one-off, part-time, and full-time opportunities at social impact organizations tackling various social issues and Sustainable Development Goals (SDGs).
    Our AI recommendations will save you time and hassle.
    `
  },
  {
    id: 2,
    icon: <DeveloperModeIcon />,
    title: "Find paid opportunities where you can learn new skills while contributing to a social cause",
    subtitle: `Find opportunities where you can earn fiat currency/SociousCoin (blockchain-based community currency) while learning new skills.
    Our proprietary algorithms ensure meaningful connections with people you want to meet and reduce the risk of mismatches.
    `
  },
  {
    id: 3,
    icon: <FilterTiltShiftIcon />,
    title: "Visualize and monetize your impact",
    subtitle: `Socious' unique algorithm quantifies and visualizes your contribution to solving social issues.
    Improve your impact credit scores and earn SociousCoin by contributing to social causes.
    `
  }
]

export default jobItem
