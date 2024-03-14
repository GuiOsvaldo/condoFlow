import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { DataGrid } from "@mui/x-data-grid";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Nome",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Espaço",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    
    {
      field: "accessLevel",
      headerName: "Tempo",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];


  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header 
        title="DASHBOARD"        
        subtitle="Monday, 14 Fevereiro 2024"
         />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.primary[900],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Exportar relatórios
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[300]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderLeft="30px solid #b29651"
        >
          <StatBox
            title="Condomínio"
            subtitle="Pérola"
            textTransform={'uppercase'}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[300]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderLeft="30px solid #384c7e"
        >
          <StatBox
            title="Condomínio"
            subtitle="Ginga"
            textTransform={'uppercase'}
           
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[300]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderLeft="30px solid #9651b2"
        >
          <StatBox
            title="Condomínio"
            subtitle="Sonangol"
            textTransform={'uppercase'}
                                                     
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[300]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderLeft="30px solid #3ed2f8"
        >
          <StatBox
            
            title="Condomínio"
            subtitle="Azule"
            textTransform={'uppercase'}
          
          />
        </Box>

        {/* ROW 2 */}

     
       
    <Box m="20px" 
    gridColumn="span 8"
    gridRow="span 5" mt="-75px">
      
      <Box

        m="40px 0 0 0"
        height="53vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
         <Typography
            variant="h3"
            fontWeight="700"
            sx={{ padding: "30px 30px 0 30px" }}
            textTransform={'uppercase'}
            color="#777"
            
          >
            Reservas recentes

          </Typography><br />
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>




        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[300]}
          borderRadius={'5px'}
          height={'53vh'}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
            textTransform={'uppercase'}
          >
            Gráficos de serviço
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        {/* ROW 3 */}
        
      
      </Box>
    </Box>
  );
};

export default Dashboard;
