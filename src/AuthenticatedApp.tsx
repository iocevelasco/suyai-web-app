import { Box, CircularProgress, Grid } from '@mui/material'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import routes from 'routes'
const DashboardPage = lazy(() => import('ui/pages/Dashboard'))

export function RoutesLoader() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ height: '100vh' }}
    >
      <CircularProgress />
    </Grid>
  )
}

export default function DashBoard() {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100%" width="100%">
      <Suspense fallback={<RoutesLoader />}>
        <Routes>
          <Route path={routes.dashboard.path} element={<DashboardPage />} />
        </Routes>
      </Suspense>
    </Box>
  )
}
