import React, { useState }  from "react";

import { Text, View, ScrollView, FlatList, Image, TouchableOpacity } from "react-native";

import { btn } from "../../../styles/btn";
import { MainPageStyles } from "./MainPageStyles";

const MainPage = () => {
    const [btns, setBtns] = useState([
        {type: '', color: '#FF5E5E', title: 'All'},
        {type: 'design', color: '#AEFF5E', title: 'Design'},
        {type: 'development', color: '#5EECFF', title: 'Development'},
        {type: 'testing', color: '#D55EFF', title: 'Testing'}
    ]);

    const [tasks, setTasks] = useState([
        {title: 'Create the first block for landing page', pomoCurr: 2, time: '12 pm', done: true, type: 'design', color: '#AEFF5E'},
        {title: 'Create the first block for landing page', pomoCurr: 2, time: '12 pm', done: true, type: 'development', color: '#5EECFF'},
        {title: 'Create the first block for landing page', pomoCurr: 2, time: '12 pm', done: true, type: 'testing', color: '#D55EFF'},
        {title: 'Create the first block for landing page', pomoCurr: 2, time: '12 pm', done: true, type: 'design', color: '#AEFF5E'},
        
    ])

    const [filter, setFilter] = useState('');

    return(
        <View>
            <ScrollView
                horizontal
                style={[{marginLeft: 20}, {marginTop: 20}]}
                >
                <FlatList numColumns={+btns.length} data={btns} renderItem={({item: {type, color, title}}) => (
                    <TouchableOpacity style={btn.MainPageMiniBtn} onPress={() => setFilter(type)}>
                        <View style={[MainPageStyles.circle, {backgroundColor: color}]} />
                        <Text>{title}</Text>
                    </TouchableOpacity>
                )}/>
            </ScrollView>
            <View style={MainPageStyles.taskListWrapper}>
                <FlatList style={MainPageStyles.taskList} data={tasks} renderItem={({item}) => 
                    (
                        item.type.indexOf(filter) !== -1 && (
                            <View style={MainPageStyles.listItem}>
                                <View style={MainPageStyles.listItemWrapper}>
                                    <View style={[MainPageStyles.leftDivider, {backgroundColor: item.color}]}/>
                                    <View style={MainPageStyles.listItemIncludeWrapper}>
                                        <Text>{item.title}</Text>
                                        <View style={MainPageStyles.listItemInclude}>
                                            <View style={MainPageStyles.listItemIncludeItems}>
                                                <Image source={require('../../../icons/default.png')} style={MainPageStyles.listItemPlay}/> 
                                                <View style={MainPageStyles.listItemTomato}>
                                                    <Image source={require('../../../icons/tomato.png')}/>
                                                    <Text style={MainPageStyles.afterImgText}>{item.pomoCurr}</Text>
                                                </View>
                                                <View style={MainPageStyles.listItemClock}>
                                                    <Image source={require('../../../icons/clock.png')}/>
                                                    <Text style={MainPageStyles.afterImgText}>{item.time}</Text>
                                                </View>
                                            </View>
                                            <View>
                                                <Image source={require('../../../icons/done.png')}/>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={MainPageStyles.bottomDivider}/>
                            </View>
                        )
                    )
                }/>
            </View>
        </View>
        
    )
}

export default MainPage;