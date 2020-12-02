//  libraries
import React, { useState } from 'react';

//  constants
import provincesList from 'constants/provinces';

//  validators and tools
import {
  textValidator,
  phoneValidator,
  requiredValidator,
  emailValidator,
  passwordValidator,
} from 'tools/formValidators';

//  hooks
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

//  redux
import { authSignupRequest } from 'redux/ducks/auth/actions';

//  components
import Typography from 'UIElements/typography/Typography';
import Button from 'UIElements/button/Button';
import Loader from 'UIElements/loader/Loader';

//  styles
import {
  ContainerDiv, Form, LabelWrapper, RowDiv, ErrorSpan, TermsDiv,
} from './styles';

export default function Register() {
  const dispatch = useDispatch();
  const {
    register, handleSubmit, errors, watch, setError,
  } = useForm();
  const loading = useSelector((state) => state.session.loading);
  const [showToast, setShowToast] = useState(false);
  const countries = Object.keys(provincesList);
  const watchCountry = watch('country');
  const provinces = provincesList[watchCountry] || [];

  const onSubmit = ({ confirmPassword, terms, ...payload }) => {
    if (payload.password !== confirmPassword) {
      setError('confirmPassword', {
        type: 'manual',
        message: 'Las contraseñas deben coincidir.',
      });
      return;
    }
    dispatch(authSignupRequest(
      payload,
      () => { setShowToast(true); },
    ));
  };

  const renderInput = (name, label, validator, type = 'text', inputProps) => (
    <LabelWrapper htmlFor={name} $error={!!errors[name]}>
      <span>{label}</span>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <input type={type} name={name} id={name} ref={register(validator)} {...inputProps} />
      {errors[name] && <ErrorSpan>{errors[name].message}</ErrorSpan>}
    </LabelWrapper>
  );

  const renderSelect = (name, label, validator, options) => (
    <LabelWrapper htmlFor={name} $error={!!errors[name]}>
      <span>{label}</span>
      <select name={name} ref={register(validator)}>
        <option value=''>Seleccione...</option>
        {options.map((location) => (
          <option value={location} key={location}>{location}</option>
        ))}
      </select>
      {errors[name] && <ErrorSpan>{errors[name].message}</ErrorSpan>}
    </LabelWrapper>
  );

  return (
    <ContainerDiv>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant='h1' weight='bold' color='green'>Registro</Typography>
        <Typography variant='h2' color='secondary' weight='600'>Información Personal</Typography>
        <RowDiv>
          {renderInput('name', 'Nombre', textValidator())}
          {renderInput('last_name', 'Apellido', textValidator())}
        </RowDiv>
        <RowDiv>
          {renderSelect('country', 'País', requiredValidator, countries)}
          {renderSelect('province', 'Provincia', requiredValidator, provinces)}
        </RowDiv>
        <Typography variant='h2' color='secondary' weight='600'>Información de Contacto</Typography>
        <RowDiv column>
          {renderInput('email', 'Email', emailValidator)}
          {renderInput('phone', 'Telefono', phoneValidator, 'phone')}
        </RowDiv>
        <Typography variant='h2' color='secondary' weight='600'>Cuenta</Typography>
        <RowDiv column>
          {renderInput('password', 'Password', passwordValidator, 'password', { autoComplete: 'new-password' })}
          {renderInput('confirmPassword', 'Confirm password', passwordValidator, 'password')}
          <label className='terms' htmlFor='terms'>
            <TermsDiv>
              <input type='checkbox' name='terms' id='terms' ref={register(requiredValidator)} />
              <span>
                Estoy de acuerdo con los {' '}
                <a href='https://www.wolox.com.ar' target='_blank' rel='noopener noreferrer'>terminos y condiciones</a>
              </span>
            </TermsDiv>
            {errors.terms
              && <ErrorSpan>Debes aceptar los terminos y condiciones para continuar.</ErrorSpan>}
          </label>
          {showToast && <ErrorSpan>¡Conexión Fallida!</ErrorSpan>}
        </RowDiv>
        <Button
          type='submit'
          size='big'
          bgColor='green'
          fontColor='secondary'
          disabled={Object.keys(errors).length > 0 || loading}
        >
          Registartme {loading && <Loader />}
        </Button>
      </Form>
    </ContainerDiv>
  );
}
