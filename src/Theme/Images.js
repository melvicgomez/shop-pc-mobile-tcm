/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function () {
  return {
    logo: require('@/Assets/Images/TOM.png'),
    welcomeScreenIcons: [
      require('@/Assets/Images/deals-promos.png'),
      require('@/Assets/Images/new-arrivals.png'),
      require('@/Assets/Images/pc-setup.png'),
    ],
  };
}
