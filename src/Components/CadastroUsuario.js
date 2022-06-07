import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Home from '../Assets/home.png'
import newUser from "../Services/cadastro";
import Toolbar from '@mui/material/Toolbar'

//TODO: COLOCAR MASCARA NO NASCIMENTO
function FormUsuario() {
  const formik = useFormik({
      initialValues: {
          email: '',
          password: '',
          name: '',
          dataNascimento: '',
          listaPresentes: '',
      },
      onSubmit: (values) => {
        newUser({
          name: values.name,
          email: values.email,
          password: values.password
        })
          .then((response) => console.log(response))
          .catch((error) => console.log(error))
    },
  })

  return (
  <div>
    <AppBar position="static">
      <Grid alignItems="center" display="flex" container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
          <Grid item xs={7} square padding="50px">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              borderRadius="10px"
            >
            <Typography component="h1" variant="h4" width="70%">
              Organize e <span style={{ color:"#2DD23D" }}>sorteie</span> seu Amigo Secreto com muita facilidade e rapidez!
            </Typography>
            <img src={Home} alt="Home" />

          </Box>
          </Grid>
          <Grid item xs={4} square>
            <Grid item xs={12} component={Paper} elevation={6} padding="10px 20px" marginRight="80px" square>
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                borderRadius="10px"
              >
                <Typography component="h5" variant="h6">
                  <b>Cadastre-se agora e começe a participar dos sorteios!</b>
                </Typography>
                <Box padding="0 10%" sx={{ mt: 1 }}>
                  <form onSubmit={formik.handleSubmit}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      label="Email"
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />
                    <TextField
                      margin="normal"
                      fullWidth
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      name="password"
                      label="Senha"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <TextField
                      margin="normal"
                      fullWidth
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      name="name"
                      label="Nome Completo"
                      type="name"
                      id="name"
                    />
                    <TextField
                      margin="normal"
                      fullWidth
                      value={formik.values.dataNascimento}
                      onChange={formik.handleChange}
                      name="dataNascimento"
                      label="Data de Nascimento"
                      type="dataNascimento"
                      id="dataNascimento"
                    />
                    <TextField
                      margin="normal"
                      fullWidth
                      value={formik.values.listaPresentes}
                      onChange={formik.handleChange}
                      name="listaPresentes"
                      label="Lista de Presente"
                      helperText="Conta pra gente o que você adoraria ganhar!"
                      type="listaPresentes"
                      id="listaPresentes"
                    />
                    <Button
                      variant="contained"
                      type="submit"
                      style={{ backgroundColor:"#147A12" }}
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Cadastrar
                    </Button>
                    </form>
                  </Box>
                </Box>
              </Grid>
          </Grid>
      </Grid>
    </AppBar>
  </div>
  )
}

export default function CadastroUsuario () {
  return <FormUsuario />
}
