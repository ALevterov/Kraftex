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
          name: Yup.string().required('Поле обязательно для заполнения'),
          city: Yup.string().required('Город обязателен для заполнения'),
          email: Yup.string()
            .email('Введите корректный email')
            .required('Email обязателен для заполнения'),
          contact: Yup.string().required('Укажите контакт для связи'),
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
            <span className={styles.additionalText}>
              * - обязательные поля для заполнения
            </span>
            <InviteInput id='name' label={'Представьтесь, пожалуйста*'} />
            <div className={styles.doubleInputWrapper}>
              <InviteInput id='city' label={'Город*'} />
              <InviteInput id='email' label={'E-mail*'} />
            </div>
            <InviteInput id='phone' label={'Номер телефона'} />
            <InviteInput
              id='contact'
              label={'Иной контакт для связи (например, Telegram)*'}
            />
            <InviteInput id='message' label={'Текст сообщения'} />
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
