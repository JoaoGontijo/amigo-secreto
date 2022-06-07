import React from "react";
import TextField from '@mui/material/TextField';
import InputMask from 'react-input-mask';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Home from '../Assets/home.png'

function FormUsuario() {
  const [value, setValue] = React.useState('10051998');
  
  const validationLogin = yup.object({
    email: yup
      .string('Digite um email')
      .email('Digite um email válido')
      .required('Este campo é obrigatório'),
    password: yup
      .string('Digite sua senha')
      .required('A senha é obrigatória'),
  });

  const formik = useFormik({
      initialValues: {
          email: '',
          password: '',
          dataNascimento: '',
          listaPresentes: '',
      },
      validationSchema: validationLogin,
      onSubmit: (() => console.log('cadastro'))
  })

  return (
  <div>
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
              <Box component="form" padding="0 10%" noValidate sx={{ mt: 1 }}>
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  value={formik.values.email}
                  label="Email"
                  name="email"
                  onChange={formik.handleChange}
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={formik.values.password}
                  name="password"
                  label="Senha"
                  type="password"
                  onChange={formik.handleChange}
                  id="password"
                  autoComplete="current-password"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={formik.values.name}
                  name="name"
                  label="Nome Completo"
                  onChange={formik.handleChange}
                  type="name"
                  id="name"
                />
                <InputMask
                  mask="99/99/9999"
                  value={value}
                  disabled={false}
                  maskChar=" "
                >
                  {() => 
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    value={formik.values.dataNascimento}
                    name="name"
                    onChange={formik.handleChange}
                    label="Data de Nascimento"
                    type="name"
                    id="name"
                  />
                  }
                </InputMask>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={formik.values.listaPresentes}
                  name="listaPresente"
                  onChange={formik.handleChange}
                  label="Lista de Presente"
                  helperText="Conta pra gente o que você adoraria ganhar!"
                  type="listaPresente"
                  id="listaPresente"
                />
                <Button
                  type="submit"
                  variant="contained"
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
  </div>
  )
}

export default function CadastroUsuario () {
  return <FormUsuario />
}
