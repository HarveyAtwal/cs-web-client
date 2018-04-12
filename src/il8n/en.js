export default {
  general: {
    appName: "coinskill",
    signIn: "Sign In",
    signUp: "Sign Up",
    cancel: "Cancel",
    save: "Save"
  },

  legal: {
    privacy: "Privacy Policy",
    terms: "Terms of Service"
  },

  error: {
    emptyEmailField: "Missing email address field",
    emptyPasswordField: "Missing password field",
    invalidEmail: "Invalid email address entered",
    accountExists: "An account already exists with that email address",
    passwordLength: `Password must be at least 6 characters long`
  },

  illustrations: {
    addPortfolio: {
      title: "Looks like you don't have any Portfolios",
      desc: "Fortunately, it's very easy to create one!",
      action: "Create New Portfolio"
    }
  },

  modals: {
    createPortfolio: {
      title: "Create New Portfolio",
      portfolioName: "Portfolio Name",
      portfolioNamePlaceholder: "Long term investments",
      currency: "Local currency",
      accumulatingCurrency: "Accumulating cryptocurrency"
    }
  },

  holding: {
    symbol: "Symbol",
    date: "Date",
    quantity: "Quantity",
    price: "Price",
    total: "Total",
    marketPrice: "Market Price",
    marketTotal: "Market Total",
    gain: "Gain"
  },

  widgets: {
    positions: {
      title: "Your Open Positions",
      empty: "You have no open positions",
      openPosition: "Open Position",
    },
    tradeTracker: {
      title: "Trade Tracker"
    },
    profitTracker: {
      title: "Profit Tracker"
    },
    activity: {
      title: "Your Activity"
    },
    reports: {
      title: "Your Reports"
    },
    tradeHeatMap: {
      title: "Trade Heat Map"
    },
    portfolioWeight: {
      title: "Portfolio Weight"
    }
  },

  avatarDropdown: {
    "settings": "Account Profile",
    "invite": "Invite friends",
    "signout": "Sign out"
  },

  form: {
    emailAddress: "Email Address",
    password: "Password",
    verifyPassword: "Verify Password",
  },

  navigation: {
    "portfolio": "Portfolio",
    "tracker": "Tracker",
    "activity": "Activity",
    "reports": "Reports",
    "settings": "Settings",
  },

  footer: {
    copy: "© 2017 Coinskill",
    home: "Home"
  },

  user: {
    username: "Username",
    email: "Email",
    language: "Language",
    timeZone: "Time zone",
    profilePhoto: "Profile Photo"
  },

  page: {
    "404": {
      title: "Page Not Found",
      description: "We couldn't find the page you requested."
    },
    signin: {
      title: "Sign into coinskill",
      forgotPassword: "Forgot Password?",
      signup: "Don't have an account? Sign up",
      signin: "Sign In",
      invalid: "Invalid email or password. If you're having trouble signing in, try clicking 'Forgot Password"
    },
    signup: {
      title: "Create Your Account",
      hasAccount: "Already have an account? Sign in",
      createAccount: "Create Account",
      registerPolicy: `By registering, you agree to the %{privacyPolicy} and %{tos}`,
      invalid: "Failed to register, please try again.",
      invitationSent: "We just sent an activation email to %{email}. Please click the link in the email to get started."
    },
    forgot: {
      title: "Forgot Your Password?",
      resetPassword: "Reset Password",
      hasAccount: "Already have an account? Sign in",
    },
    settings: {
      profile: {
        title: "Profile",
        accountProfile: "Account Profile",
        deleteAccount: "Delete Account",
        saveChanges: "Save Changes"
      },
      password: {
        title: "Password",
        currentPassword: "Current password",
        newPassword: "New password",
        verifyPassword: "Verify password",
        changePassword: "Change Password"
      },
      api: {
        title: "APIs",
      }
    }
  }
}
