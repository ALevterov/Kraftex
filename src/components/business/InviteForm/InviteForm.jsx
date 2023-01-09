import { Formik } from 'formik'
import styles from './InviteForm.module.css'
import * as Yup from 'yup'
import InviteInput from 'components/ui/InviteInput/InviteInput'
import ButtonWithIcon from 'components/ui/Buttons/WithIcon/ButtonWithIcon'
import ArrowRight from 'components/icons/ArrowRight'
import GuardIcon from 'components/icons/GuardIcon'
const formikInitialValues = {
  name: '',
  city: '',
  email: '',
  phone: '',
  contact: '',
  message: '',
}
const InviteForm = () => {
  const handleSubmit = async (
    values,
    { setErrors, setStatus, setSubmitting }
  ) => {
    console.log('hello!')
    console.log(values)
  }
  return (
    <div className={styles.formWrapper}>
      <Formik
        initialValues={formikInitialValues}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Поле обязательно для заполнения*'),
          city: Yup.string().required('Поле обязательно для заполнения*'),
          email: Yup.string()
            .required('Поле обязательно для заполнения*')
            .email('Введите корректный email*'),
          contact: Yup.string().required('Поле обязательно для заполнения*'),
        })}
        onSubmit={handleSubmit}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form
            className={styles.inviteForm}
            noValidate
            onSubmit={handleSubmit}
          >
            <span
              className={[
                styles.additionalText,
                Object.keys(touched).some(t => Object.keys(errors).includes(t))
                  ? styles.formError
                  : '',
              ].join(' ')}
            >
              {Object.keys(touched).some(t => Object.keys(errors).includes(t))
                ? 'Поле обязательно для заполнения*'
                : '* - обязательные поля для заполнения'}
            </span>
            <InviteInput
              errors={errors.name}
              id='name'
              label={'Представьтесь, пожалуйста*'}
              touched={touched.name}
              onChange={handleChange}
              value={values.name}
            />
            <div className={styles.doubleInputWrapper}>
              <InviteInput
                errors={errors.city}
                id='city'
                label={'Город*'}
                onChange={handleChange}
                value={values.city}
                touched={touched.city}
              />
              <InviteInput
                errors={errors.email}
                id='email'
                label={'E-mail*'}
                onChange={handleChange}
                value={values.email}
                touched={touched.email}
              />
            </div>
            <InviteInput
              errors={errors.phone}
              id='phone'
              label={'Номер телефона'}
              onChange={handleChange}
              value={values.phone}
              touched={touched.phone}
            />
            <InviteInput
              id='contact'
              label={'Иной контакт для связи (например, Telegram)*'}
              onChange={handleChange}
              value={values.contact}
              touched={touched.contact}
              errors={errors.contact}
            />
            <InviteInput
              errors={errors.message}
              id='message'
              label={'Текст сообщения'}
              onChange={handleChange}
              value={values.message}
              touched={touched.message}
            />
            <ButtonWithIcon
              type={'button'}
              text={'Отправить'}
              icon={<ArrowRight />}
            />
          </form>
        )}
      </Formik>
      <div className={styles.commonWrapper}>
        <div className={styles.iconWrapper}>
          <GuardIcon />
        </div>
        <div className={styles.safety}>
          Используем шифрование для гарантии безопасности Ваших персональных
          данных
        </div>
      </div>
      <div className={styles.agreement}>
        Нажимая кнопку “Отправить”, я подтверждаю согласие на обработку моих
        персональных данных
      </div>
    </div>
  )
}

export default InviteForm
