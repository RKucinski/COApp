
import React from 'react';
import { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    Image,
    Button
} from 'react-native';
import colors from '@constants/Colors'
import { Icon } from 'react-native-elements'

class BottomBar extends Component {
    render() {
        console.log('inside bottombar')
        console.log(this.props)
    // Ici je reçois les informations de navigation via les props et j'ai accès aux différents
    // screens figurant dans HomeTabs.js
        return (
            <View style={{
                // flex: 1,
                flexDirection: 'column',
                backgroundColor: colors.linen,
                height: 80

            }}>
                <View style={{ position: 'absolute', alignSelf: 'flex-end', backgroundColor: colors.linen, width: 70, height: 70, borderRadius: 35, bottom: 25, right: 25, zIndex: 10 }}>
                    <Icon
                        name='add'
                        type='material'
                        color={colors.darkgunmetal}
                        containerStyle={{ alignSelf: 'center' }}
                        reverse
                        size={28}
                        onPress={() => {console.log('clickkciekcioececoekceo')}}
                    />
                </View>
                <View style={{ position: 'absolute', backgroundColor: colors.brown, bottom: 0, zIndex: 1, width: '100%', height: 60, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 10 }}>
                    {/* <Icon
                        name='menu'
                        type='material'
                        color='#fff'
                        onPress={() => {}}

                    /> */}
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        {/* <Icon
                            name='favorite'
                            type='material'
                            color='#fff'
                            onPress={() => {}}
                            containerStyle={{ marginHorizontal: 16 }}
                        />
                        <Icon
                            name='search'
                            type='material'
                            color='#fff'
                        /> */}
                    </View>
                </View>
            </View>
        );
    }
}

export default BottomBar






// import { TabBarBottomProps, NavigationRoute } from 'react-navigation';

// // just for ide hints
// interface TabBarProps extends TabBarBottomProps {

// }

// interface TabBarState {
// }

// class TabBar extends Component<TabBarProps, TabBarState> {

//     navigationStateIndex = null;
    
//     // call when each time user click different tab
//     navigationAvaliableFuncs: {
//         [key: string]: () => boolean
//     } = {
//             //Account: this._needSignIn.bind(this),
//             //Progress: this._needSignIn.bind(this),
//         }
  
//     // call when clicking tab got refused
//     navigationRefusedFuncs: {
//         [key: string]: () => void
//     } = {
//             Account: this._refusedByNeedSignIn.bind(this),
//             Progress: this._refusedByNeedSignIn.bind(this)
//         }

//     constructor(props: TabBarProps) {
//         super(props);
//     }

//     /*  _needSignIn() {
//         return !!this.props.authToken;
//     } */

//     /*_refusedByNeedSignIn() {
//         const { navigation } = this.props;
//         navigation.navigate('...');
//     }*/
  
//     // Main function to render tabbar
//     renderTabBarButton(route: NavigationRoute, idx: any) {
//         const {
//             activeTintColor,
//             inactiveTintColor,
//             navigation,
//             getLabelText,
//             renderIcon,
//         } = this.props;
//         const currentIndex = navigation.state.index;
//         const color = currentIndex === idx ? activeTintColor : inactiveTintColor;
//         const label = getLabelText({ route, focused: currentIndex === idx, index: idx });
//         return (
//             <TouchableOpacity
//                 onPress={() => {
//                     if (currentIndex != idx) {
//                         if (this.isNavigateAvaliable(label as string)) {
//                             navigation.navigate(route.routeName);
//                         } else {
//                             this._onNavigationRefused(label as string);
//                         }
//                     }
//                 }}
//                 style={StdStyles.tabBarButton}
//                 key={route.routeName}
//             >
//                 {renderIcon({ route, tintColor: color, focused: currentIndex === idx, index: idx })}
//                 // uncomment if you need title under tab
//                 {/* <Text style={[ StdStyles.tabBarButtonText, { color }]}>
//                     {label}
//                 </Text>  */}
//             </TouchableOpacity>
//         );
//     }

//     isNavigateAvaliable(label: string) {
//         const func: any = this.navigationAvaliableFuncs[label];
//         if (func) {
//             return func();
//         }
//         return true;
//     }

//     _onNavigationRefused(label: string) {
//         const func = this.navigationRefusedFuncs[label];
//         if (func) {
//             func();
//         }
//     }

//     render() {
        
//         const { navigation, style } = this.props;
//         const tabBarButtons = navigation.state.routes.map(this.renderTabBarButton.bind(this));
//         return (
//             <View style={[StdStyles.tabBar, style]}>
//                 {tabBarButtons}
//             </View>
//         );
//     }
// }

// // Possible extension with redux
// // function mapStateToProps(state: any) {
// //    return {
// //        ....,
// //    }
// // }
// // function mapDispatchToProps(dispatch) {
// //     return bindActionCreators(..., dispatch);
// // }
// // const _TabBar = connect(mapStateToProps)(TabBar);
// // export { _TabBar as TabBar };