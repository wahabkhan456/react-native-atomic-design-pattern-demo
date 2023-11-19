import React, { useEffect, useState } from 'react';
import { View, ScrollView, } from 'react-native';

//components
import Card from "../../components/atom/Card";

//redux
import { useDispatch, useSelector } from 'react-redux';
import * as dataActions from 'app/actions/dataActions';

//styles
import styles from './styles';

//navigation
import NavigationService from 'app/navigation/NavigationService';

//utils
import SearchBar from '../../components/atom/Search';
import Loader from '../../components/atom/Loader';


const Home = (props) => {
  const [loading, setLoading] = useState(false);
  // const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  //REDUX
  const dispatch = useDispatch();
  const onFetchData = () => dispatch(dataActions.getData());
  const data = useSelector(state => state.dataReducer.data)

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = data.filter(
        function (item) {
          const itemData = item.country || item.city
            ? item.country.toUpperCase() || item.country.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(data);
      setSearch(text);
    }
  };


  useEffect(() => {
    searchFilterFunction('');
    setTimeout(() => {
      setLoading(!loading);
    }, 3000)
    onFetchData();
    setLoading(loading)
  }, []);

  const onJobPressed = (data) => {
    NavigationService.navigate('customerDetails', { data });
  }

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search"
        onChangeText={(text) => searchFilterFunction(text)}
        value={search}
      />

      <ScrollView>
        {loading ? data && filteredDataSource.map((item, index) => {
          return (
            <Card
              key={index}
              data={item}
              onJobPressed={() => onJobPressed(item)}
            />
          )
        }) : <Loader />}
      </ScrollView>

    </View>
  );
}



export default Home;
