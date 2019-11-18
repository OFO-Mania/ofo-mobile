import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Content OnBoarding Page
// import Boarding from '../screens/OnBoardingScreen/Boarding';

//Content Login & Sign Up
import SignInScreen from '../screens/authScreen/SignInScreen';
import JoinScreen from '../screens/authScreen/JoinScreen';
import TOSScreen from '../screens/authScreen/TOSScreen'
import PrivacyPolicyScreen from '../screens/authScreen/PrivacyPolicyScreen'

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

//Auth Navigation
const AuthStack = createStackNavigator(
    {
      SignIn: SignInScreen,
      Join: JoinScreen,
      TOS: TOSScreen,
      Policy: PrivacyPolicyScreen
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