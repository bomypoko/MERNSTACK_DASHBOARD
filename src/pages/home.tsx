import React from "react"
import { useList } from "@pankod/refine-core"
import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent,
} from "components"
import { Box, Typography } from "@pankod/refine-mui"

const Home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" gap={4} flexWrap="wrap">
        <PieChart
          title="Properties for sale"
          value={684}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Properties for Rent"
          value={550}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Properties for Total Customer"
          value={684}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Properties for Cities"
          value={684}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
      </Box>
    </Box>
  )
}

export default Home
