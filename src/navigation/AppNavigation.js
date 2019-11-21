import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Screen OnBoarding Page
// import Boarding from '../screens/OnBoardingScreen/Boarding';

//Screen Sign In
import SignInScreen from '../screens/authScreen/SignInScreen';
import OTPSignIn from '../screens/authScreen/OTPSignIn';
import SecurityCodeScreen from '../screens/authScreen/SecurityCodeScreen';
import OTPForgetSecurityCode from '../screens/authScreen/OTPForgetSecurityCode';

//Screen Join
import JoinScreen from '../screens/authScreen/JoinScreen';
import TOSScreen from '../screens/authScreen/TOSScreen';
import PrivacyPolicyScreen from '../screens/authScreen/PrivacyPolicyScreen';
import HelpCenterScreen from '../screens/authScreen/HelpCenterScreen';
import OTPPhone from '../screens/authScreen/OTPPhone';
import OTPEmail from '../screens/authScreen/OTPEmail';
import SuccessJoinScreen from '../screens/authScreen/SuccessJoinScreen';
import CreateSecurityCodeScreen from '../screens/authScreen/CreateSecurityCodeScreen';

//Screen App
import TabNavigation from '../navigation/TabNavigation';
import DealsDetails from '../screens/appScreen/DealsDetailsScreen';
import EditProfile from '../screens/appScreen/EditProfileScreen';
import PLNScreen from '../screens/appScreen/PLNScreen'
import TopUpNavigation from './TopUpNavigation';
import TransferNavigation from './TransferNavigation';
import History from '../screens/appScreen/HistoryScreen';
//OnBoarding Navigation
// const OnBoardingStack = createStackNavigator(
//     {
//       Boarding: Boarding
//     },
//     {
//       initialRouteName: 'Boarding',
//       headerMode: 'none',
//     }
// )

//App Tab Navigation
const AppStack = createStackNavigator(
    {
      TabNavigation,
      DealsDetails,
      EditProfile,
      PLNScreen
      TopUpNavigation,
      TransferNavigation,
      History
    },
    {
      initialRouteName: 'TabNavigation',
      headerMode: 'none',
    }
)

//OTP Join Switch Navigation
const OTP = createSwitchNavigator(
  {
    OTPPhone: OTPPhone,
    OTPEmail: OTPEmail,
    CreateSecurityCode: CreateSecurityCodeScreen,
    SuccessJoin: SuccessJoinScreen,
  },
  {
    initialRouteName: 'OTPPhone',
    headerMode: 'none',
  }
)

//Sign In Navigation
const SignInStack = createStackNavigator(
  {
    SignIn: SignInScreen,
    OTPSignIn: OTPSignIn,
    CreateSecurityCode: CreateSecurityCodeScreen,
    SecurityCode: SecurityCodeScreen,
    OTPForgetSecurityCode: OTPForgetSecurityCode
  },
  {
    initialRouteName: 'SignIn',
    headerMode: 'none',
  }
)

//Auth Navigation
const AuthStack = createStackNavigator(
  {
    SignIn: SignInStack,
    Join: JoinScreen,
    TOS: TOSScreen,
    Policy: PrivacyPolicyScreen,
    HelpCenter: HelpCenterScreen,
    OTP: OTP,
  },
  {
    initialRouteName: 'SignIn',
    headerMode: 'none',
  }
)

//App Navigation
const AppNavigation = createSwitchNavigator(
  {
      //Loading: LoadingScreen,
      //Boarding: OnBoardingStack,
      Auth: AuthStack,
      App: AppStack,
  },
  {
        initialRouteName: "App",
        headerMode: 'none',
  }
)

export default createAppContainer(AppNavigation);
