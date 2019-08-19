import React, { Component } from 'react';
import {
    Text,
    Image, 
    FlatList,
    TouchableOpacity,
    View,
    Dimensions
} from 'react-native'; 
import styles from '../assets/styles'
import LinearGradient from 'expo-linear-gradient'
const { width, height } = Dimensions.get('window');
import { Ionicons } from '@expo/vector-icons';

const data = [{
        "id":"1",
        "title":"PartyApp Paso 1",
        "text":"El primer paso es éste",
        "color":'#A24C97'
    },
    {
        "id":"2",
        "title":"PartyApp Paso 2",
        "text":"Éste es el segundo paso",
        "color":'#F8EA3D'
    },
    {
        "id":"3",
        "title":"PartyApp Paso 3",
        "text":"Por último está el tercer paso",
        "color":'#E62E78'
    },
]


export default class IntroAppScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
      width,
      height,
      activeIndex: 0,
  }

  _renderItem = ({ item }) => (
    <View style={[styles.introContainer,{flex: 1,backgroundColor:item.color,width: this.state.width},]}>
      <Image
        style={{ width: 250, height: 250, resizeMode: 'contain'}}
        source={require('../assets/images/logo.png')} />
      <View>
        <Text style={styles.introTitle}>{item.title}</Text>
        <Text style={styles.introText}>{item.text}</Text>
      </View>
    </View>
  );

  _renderNextButton = () => this._renderButton('Siguiente', this._onNextPress);

  _renderPrevButton = () => this._renderButton('Anterior', this._onPrevPress);

  _renderDoneButton = () => this._renderButton('Finalizar', this._onDone);

  _renderButton = (name, onPress) => {
    return (
    <View style={styles.rightButtonContainer}>
      <TouchableOpacity
        onPress={onPress}
        style={{flex:1}}
      >
        <Text style={[styles.introButtonText]}>
          {name.toUpperCase()}
        </Text>
      </TouchableOpacity>
    </View>
    )
  };


  _renderPagination = () => {
    const isLastSlide = this.state.activeIndex === data.length - 1;
    const btn = isLastSlide ? this._renderDoneButton() : this._renderNextButton();
    return (
      <View style={[styles.paginationContainer]}>
        <View style={styles.paginationDots}>
          {data.length > 1 &&
            data.map((_, i) => (
              
              <TouchableOpacity
                key={i}
                style={[styles.dot, i === this.state.activeIndex ? styles.activeDotStyle : styles.dotStyle]}
                onPress={() => this._onPaginationPress(i)}
              />
            ))}
        </View>
        {btn}
      </View>
    );
  };

  _onNextPress = () => {
    this.goToSlide(this.state.activeIndex + 1);
  };
  _onPrevPress = () => {
    this.goToSlide(this.state.activeIndex - 1);
  };

  _onPaginationPress = index => {
    const activeIndexBeforeChange = this.state.activeIndex;
    this.goToSlide(index);
  };

  goToSlide = pageNum => {
    this.setState({ activeIndex: pageNum });
    this.flatList.scrollToOffset({
      offset: pageNum * this.state.width,
    });
  };

  _onMomentumScrollEnd = e => {
    const offset = e.nativeEvent.contentOffset.x;
    // Touching very very quickly and continuous brings about
    // a variation close to - but not quite - the width.
    // That's why we round the number.
    // Also, Android phones and their weird numbers
    const newIndex = Math.round(offset / this.state.width);
    if (newIndex === this.state.activeIndex) {
      // No page change, don't do anything
      return;
    }
    const lastIndex = this.state.activeIndex;
    this.setState({ activeIndex: newIndex });
  };

  _keyExtractor = (item, index) => item.id;

  _onDone = () => {
    this.props.navigation.navigate('index')
  }

  render() {
    return (
      <View style={{flex:1}}>
          <FlatList 
            ref={ref => (this.flatList = ref)}
            data={data}
            horizontal={true}
            pagingEnabled={true}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            styles={styles.intro}
            extraData={this.state.width}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
            onMomentumScrollEnd={this._onMomentumScrollEnd}
            />
        {this._renderPagination()}
      </View>
    )
  }
}

