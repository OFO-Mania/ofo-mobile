import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Content OnBoarding Page
// import Boarding from '../screens/OnBoardingScreen/Boarding';

//Content Login & Sign Up
import SignInScreen from '../screens/authScreen/SignInScreen';
import JoinScreen from '../screens/authScreen/JoinScreen';
import TOSScreen from '../screens/authScreen/TOSScreen';
import PrivacyPolicyScreen from '../screens/authScreen/PrivacyPolicyScreen';
import OTPPhone from '../screens/authScreen/OTPPhone';
import OTPEmail from '../screens/authScreen/OTPEmail';
import SuccessJoinScreen from '../screens/authScreen/SuccessJoinScreen';
import SecurityCodeScreen from '../screens/authScreen/SecurityCodeScreen';

//App Tab Navigation
// const AppStack = createStackNavigator(
//     {
//       TabNavigation,
//       PersonalChatScreen,
//       FriendProfileScreen
//     },
//     {
//       initialRouteName: 'TabNavigation',
//       headerMode: 'none',
//     }
// )

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

//OTP Switch Navigation
const OTP = createSwitchNavigator(
  {
    OTPPhone: OTPPhone,
    OTPEmail: OTPEmail,
    SuccessJoin: SuccessJoinScreen,
    SecurityCode: SecurityCodeScreen
  },
  {
    initialRouteName: 'OTPPhone',
    headerMode: 'none',
  }
)

//Auth Navigation
const AuthStack = createStackNavigator(
  {
    SignIn: SignInScreen,
    Join: JoinScreen,
    TOS: TOSScreen,
    Policy: PrivacyPolicyScreen,
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
      //App: AppStack,
      // Boarding: OnBoardingStack,
        Auth: AuthStack
  },
  {
        initialRouteName: "Auth",
        headerMode: 'none',
  }
)

export default createAppContainer(AppNavigation);