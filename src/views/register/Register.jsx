//  libraries
import React from 'react';
import { useForm } from 'react-hook-form';

//  constants
import provincesList from 'constants/provinces';

//  validator tools
import {
  textValidator,
  phoneValidator,
  requiredValidator,
  emailValidator,
  passwordValidator,
} from 'tools/formValidators';

//  components
import Typography from 'UIElements/typography/Typography';
import Button from 'UIElements/button/Button';

//  styles
import {
  ContainerDiv, Form, LabelWrapper, RowDiv, ErrorSpan, TermsDiv,
} from './styles';

export default function Register() {
  const {
    register, handleSubmit, errors, watch, setError,
  } = useForm();
  const countries = Object.keys(provincesList);
  const watchCountry = watch('country');
  const provinces = provincesList[watchCountry] || [];

  const onSubmit = ({ confirmPassword, terms, ...data }) => {
    if (data.password !== confirmPassword) {
      setError('confirmPassword', {
        type: 'manual',
        message: 'Las contraseñas deben coincidir.',
      });
      return;
    }
    console.log(data);
  };

  const renderEmptyOption = () => <option value=''>Seleccione...</option>;

  return (
    <ContainerDiv>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant='h1' weight='bold' color='green'>Registro</Typography>
        <Typography variant='h2' color='secondary' weight='600'>Información Personal</Typography>
        <RowDiv>
          <LabelWrapper htmlFor='name' $error={!!errors?.name}>
            <span>Nombre</span>
            <input type='text' name='name' id='name' ref={register(textValidator())} />
            {errors.name && <ErrorSpan>{errors.name.message}</ErrorSpan>}
          </LabelWrapper>
          <LabelWrapper htmlFor='last_name' $error={!!errors?.last_name}>
            <span>Apellido</span>
            <input type='text' name='last_name' id='last_name' ref={register(textValidator())} />
            {errors.last_name && <ErrorSpan>{errors.last_name.message}</ErrorSpan>}
          </LabelWrapper>
        </RowDiv>
        <RowDiv>
          <LabelWrapper htmlFor='country' $error={!!errors?.country}>
            <span>País</span>
            <select name='country' ref={register(requiredValidator)}>
              {renderEmptyOption()}
              {countries.map((country) => <option value={country} key={country}>{country}</option>)}
            </select>
            {errors.country && <ErrorSpan>{errors.country.message}</ErrorSpan>}
          </LabelWrapper>
          <LabelWrapper htmlFor='province' $error={!!errors?.province}>
            <span>Provincia</span>
            <select name='province' ref={register(requiredValidator)}>
              {renderEmptyOption()}
              {provinces.map((province) => (
                <option value={province} key={province}>{province}</option>
              ))}
            </select>
            {errors.province && <ErrorSpan>{errors.province.message}</ErrorSpan>}
          </LabelWrapper>
        </RowDiv>
        <Typography variant='h2' color='secondary' weight='600'>Información de Contacto</Typography>
        <RowDiv column>
          <LabelWrapper htmlFor='mail' $error={!!errors?.mail}>
            <span>Email</span>
            <input type='email' name='mail' id='mail' ref={register(emailValidator)} autoComplete='false' />
            {errors.mail && <ErrorSpan>{errors.mail.message}</ErrorSpan>}
          </LabelWrapper>
          <LabelWrapper htmlFor='phone' $error={!!errors?.phone}>
            <span>Telefono</span>
            <input type='phone' name='phone' id='phone' ref={register(phoneValidator)} />
            {errors.phone && <ErrorSpan>{errors.phone.message}</ErrorSpan>}
          </LabelWrapper>
        </RowDiv>
        <Typography variant='h2' color='secondary' weight='600'>Cuenta</Typography>
        <RowDiv column>
          <LabelWrapper htmlFor='password' $error={!!errors?.password}>
            <span>Password</span>
            <input type='password' name='password' id='password' ref={register(passwordValidator)} autoComplete='new-password' />
            {errors.password && <ErrorSpan>{errors.password.message}</ErrorSpan>}
          </LabelWrapper>
          <LabelWrapper htmlFor='confirmPassword' $error={!!errors?.confirmPassword}>
            <span>Confirm password</span>
            <input type='password' name='confirmPassword' id='confirmPassword' ref={register(passwordValidator)} />
            {errors.confirmPassword && <ErrorSpan>{errors.confirmPassword.message}</ErrorSpan>}
          </LabelWrapper>
          <label className='terms' htmlFor='terms'>
            <TermsDiv>
              <input type='checkbox' name='terms' id='terms' ref={register(requiredValidator)} />
              <span>Estoy de acuerdo con los <a href='https://www.wolox.com.ar' target='_blank' rel='noopener noreferrer'>terminos y condiciones</a></span>
            </TermsDiv>
            {errors.terms
              && <ErrorSpan>Debes aceptar los terminos y condiciones para continuar.</ErrorSpan>}
          </label>
        </RowDiv>
        <Button
          type='submit'
          size='big'
          bgColor='green'
          fontColor='secondary'
          disabled={Object.keys(errors).length > 0}
        >
          Registartme
        </Button>
      </Form>
    </ContainerDiv>
  );
}
