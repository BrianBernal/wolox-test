export const requiredValidator = {
  required: 'Campo obligatorio. ',
};

export const maxLengthValidator = (value = 10) => ({
  maxLength: {
    value,
    message: `Maximo ${value} caracteres`,
  },
});

export const minLengthValidator = (value = 10) => ({
  minLength: {
    value,
    message: `Debe contener almenos ${value} caracteres`,
  },
});

export const textValidator = (maxValue = 30) => ({
  ...requiredValidator,
  ...maxLengthValidator(maxValue),
});

export const phoneValidator = {
  ...requiredValidator,
  ...minLengthValidator(3),
  ...maxLengthValidator(10),
  pattern: {
    value: /^[0-9]+$/,
    message: 'Solo digitos numericos. ',
  },
};

export const emailValidator = {
  ...textValidator(100),
  pattern: {
    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email Invalido.',
  },
};

export const passwordValidator = {
  ...requiredValidator,
  ...minLengthValidator(6),
  ...maxLengthValidator(30),
  pattern: {
    value: /([0-9]+.*[a-zA-z]+)|([a-zA-z]+.*[0-9]+)/, // "." para admitir caracteres especiales
    message: 'Debe ser alfanumerico',
  },
};
