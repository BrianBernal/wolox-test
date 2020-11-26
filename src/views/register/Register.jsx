//  libraries
import React from 'react';

//  components
import Typography from 'UIElements/typography/Typography';
import Button from 'UIElements/button/Button';

//  styles
import {
  ContainerDiv, Form, LabelWrapper, RowDiv,
} from './styles';

export default function Register() {
  return (
    <ContainerDiv>
      <Form>
        <Typography variant='h1' weight='bold' color='green'>Registro</Typography>
        <Typography variant='h2' color='secondary' weight='600'>Información Personal</Typography>
        <RowDiv>
          <LabelWrapper htmlFor='name'>
            <span>Nombre</span> <input type='text' name='name' />
          </LabelWrapper>
          <LabelWrapper htmlFor='last_name'>
            <span>Apellido</span> <input type='text' name='last_name' />
          </LabelWrapper>
        </RowDiv>
        <RowDiv>
          <LabelWrapper htmlFor='country'>
            <span>Ciudad</span>
            <select name='country'>
              <option value='Colombia'>Colombia</option>
              <option value='Argentina'>Argentina</option>
              <option value='Brasil'>Brasil</option>
              <option value='Chile'>Chile</option>
              <option value='Peru'>Peru</option>
            </select>
          </LabelWrapper>
          <LabelWrapper htmlFor='province'>
            <span>Provincia</span>
            <select name='province'>
              <option value='Bogota'>Bogota</option>
              <option value='Medellin'>Medellin</option>
              <option value='Cali'>Cali</option>
              <option value='Manizales'>Manizales</option>
              <option value='Santa Marta'>Santa Marta</option>
            </select>
          </LabelWrapper>
        </RowDiv>
        <Typography variant='h2' color='secondary' weight='600'>Información de Contacto</Typography>
        <RowDiv column>
          <LabelWrapper htmlFor='mail'>
            <span>Email</span> <input type='email' name='mail' />
          </LabelWrapper>
          <LabelWrapper htmlFor='phone'>
            <span>Telefono</span> <input type='phone' name='phone' />
          </LabelWrapper>
        </RowDiv>
        <Typography variant='h2' color='secondary' weight='600'>Cuenta</Typography>
        <RowDiv column>
          <LabelWrapper htmlFor='password'>
            <span>Password</span> <input type='password' name='password' />
          </LabelWrapper>
          <LabelWrapper htmlFor='confirmPassword'>
            <span>Confirm password</span> <input type='password' name='confirmPassword' />
          </LabelWrapper>
        </RowDiv>
        <Button type='submit' size='big' bgColor='green' fontColor='secondary'>Registartme</Button>
      </Form>
    </ContainerDiv>
  );
}
