import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeParamList } from '../../../navigators/home-navigator';

export type TwoScreenRouteProp = RouteProp<HomeParamList, 'two'>;
export type TwoScreenNavigationProp = StackNavigationProp<HomeParamList, 'two'>;

export type TwoScreenProps = {
  route: TwoScreenRouteProp;
  navigation: TwoScreenNavigationProp;
};
