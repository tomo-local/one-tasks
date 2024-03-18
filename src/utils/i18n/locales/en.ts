import { I18n } from '@/types/i18n'

const en: I18n = {
  language: {
    title: 'Language',
    japanese: 'Japanese',
    english: 'English',
  },
  error: {
    notEntered: 'Please enter a ',
  },
  alert: {
    create: {
      success: 'Creation Successful',
      failure: 'Creation Failed',
    },
    update: {
      success: 'Update Successful',
      failure: 'Update Failed',
    },
  },
  header: {
    notificationIcon: {
      title: 'Notification',
    },
    languageIcon: {
      title: 'Language',
    },
    userIcon: {
      profile: 'User Profile',
      setting: 'Setting',
      logout: 'Logout',
    },
  },
  drawer: {
    home: { title: 'Home' },
    dashboard: { title: 'Dashboard' },
    projects: { title: 'Projects' },
    tasks: { title: 'Tasks' },
    setting: { title: 'Setting' },
  },
  page: {
    home: 'Home',
    login: 'Login App',
    signup: 'Create Account',
    setting: {
      account: 'Account',
      profile: 'Profile',
      notification: 'Notification',
    },
  },
  login: {
    form: {
      title: 'Login',
      description: 'Enter your details to login.',
      email: {
        label: 'E-mail',
      },
      password: {
        label: 'Password',
      },
      failed: 'Incorrect email address or password',
      forgetPasswordLink: 'Forgotten password ?',
      submit: 'Login',
      changeSignUpButton: 'Create account',
    },
  },
  signup: {
    form: {
      title: 'Create Account',
      description: 'Enter your details to create an account.',
      email: {
        label: 'E-mail',
      },
      password: {
        label: 'Password',
      },
      passwordConfirmation: {
        label: 'Password (confirmation)',
        missMatch: 'Password does not match',
      },
      alreadyEmail: 'This email address is already registered',
      failed: 'Invalid email address or password',
      submit: 'Create account',
      changeLoginButton: 'Login',
    },
  },
  home: {},
  account: {},
  profile: {
    baseProfile: {
      title: 'Base Profile',
      fullName: { label: 'Full Name' },
      description: { label: 'Description' },
      location: { label: 'Location' },
      baseLanguage: { label: 'Base Language' },
    },
    publicSetting: {
      title: 'Publish Setting',
      public: { label: 'Public' },
      description: '〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇',
    },
    socialLink: {
      title: 'Social Links',
      description:
        'Share an external link. The link will now appear on your profile.',
      addLink: 'add link',
    },
  },
  notification: {},
}

export default en
