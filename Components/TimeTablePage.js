import {View,StyleSheet,Text, Button, TouchableOpacity, Image, RefreshControl} from "react-native"
import React, {useState, useEffect} from 'react'
import { ScrollView } from "react-native-gesture-handler";
import SelectList from 'react-native-dropdown-select-list'

export default function TimeTablePage({navigation}) {
    const [todayDate, setTodayDate] = useState(null);
    const [currentTime, setCurrentTime] = useState(null);
    const [subject, setSubject] = useState(null);
    const [upcomming, setUpcomming] = useState(null);

    const [selected, setSelected] = useState("");
    const data = [{ key: '1', value: 'IT' },{key:'2',value:'ITM'}];

    const Notification = () => {
        
        onRefresh()
        
    }

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh =React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    


    useEffect(() => {
        let today = new Date();
        let hour = today.getHours();
        let min = today.getMinutes();

        let date =today.getDate();
        let month = today.getMonth()+ 1;
        let year = today.getFullYear();
        let day = today.getDay();

        let hourMin = hour*100+min
        
        if(day==1){
            if(0<=hourMin && hourMin<=814){
                setSubject(null)
                setUpcomming("Computational Statistics / e-Business Management 8.15 am")
            }
            else if( 815<=hourMin && hourMin<=1015){
                setSubject("Computational Statistics / e-Business Management")
                setUpcomming("Communication Skill (Group A) 10.15 am")
            }
            else if( 1016<=hourMin && hourMin<=1029){
                setSubject(null)
            }
            else if( 1030<=hourMin && hourMin<=1230){
                setSubject("Communication Skill (Group A)")
                setUpcomming("Artificial Intelligence Tutorial 1.15 pm")
            }
            else if( 1231<=hourMin && hourMin<=1314){
                setSubject(null)
            }
            else if( 1315<=hourMin && hourMin<=1515){
                setSubject("Artificial Intelligence Tutorial")
                setUpcomming("Artificial Intelligence 3.30 pm")
            }
            else if( 1516<=hourMin && hourMin<=1529){
                setSubject(null)
            }
            else if( 1530<=hourMin && hourMin<=1730){
                setSubject("Artificial Intelligence Tutorial")
                setUpcomming("Computational Statistics / e-Business Management Tutorial 5.30 pm")
            }
            else if(1730<=hourMin && hourMin<=1900){
                setSubject("Computational Statistics / e-Business Management Tutorial")
                setUpcomming(null)
            }
        }
        else if(day==2){
            if(0<=hourMin && hourMin<=814){
                setSubject(null)
                setUpcomming("Management Information Systems 8.15")
            }
            else if( 815<=hourMin && hourMin<=1015){
                setSubject("Management Information Systems")
                setUpcomming("Computational Mathematics 10.15 am")
            }
            else if( 1016<=hourMin && hourMin<=1029){
                setSubject(null)
                setUpcomming("Computational Mathematics 10.15 am")
            }
            else if( 1030<=hourMin && hourMin<=1230){
                setSubject("Computational Mathematics")
                setUpcomming("Advanced Database Management Systems 1.15 pm")
            }
            else if( 1231<=hourMin && hourMin<=1314){
                setSubject(null)
                setUpcomming("Advanced Database Management Systems 1.15 pm")
            }
            else if( 1315<=hourMin && hourMin<=1515){
                setSubject("Advanced Database Management Systems")
                setUpcomming("Computational Mathematics Tutorial 3.30 pm")
            }
            else if( 1516<=hourMin && hourMin<=1529){
                setSubject(null)
                setUpcomming("Computational Mathematics Tutorial 3.30 pm")
            }
            else if( 1530<=hourMin && hourMin<=1700){
                setSubject("Computational Mathematics Tutorial")
                setUpcomming("Network Programming 5.30 pm")
            }
            else if( 1700<=hourMin && hourMin<=1730){
                setSubject(null)
                setUpcomming("Network Programming 5.30 pm")
            }
            else if(1730<=hourMin && hourMin<=1930){
                setSubject("Network Programming")
                setUpcomming(null)
            }
        }
        else if(day==3){
            if(0<=hourMin && hourMin<=814){
                setSubject(null)
                setUpcomming("Fundamentals of Bioinformatics 8.15")
            }
            else if( 815<=hourMin && hourMin<=1015){
                setSubject("Fundamentals of Bioinformatics")
                setUpcomming("Organizational Behaviour 10.30 am")
            }
            else if( 1016<=hourMin && hourMin<=1029){
                setSubject(null)
                setUpcomming("Organizational Behaviour 10.30 am")
            }
            else if( 1030<=hourMin && hourMin<=1230){
                setSubject("Organizational Behaviour")
                setUpcomming("Enterprise Application Development 1.15 pm")
            }
            else if( 1231<=hourMin && hourMin<=1314){
                setSubject(null)
                setUpcomming("Enterprise Application Development 1.15 pm")
            }
            else if( 1315<=hourMin && hourMin<=1515){
                setSubject("Enterprise Application Development")
                setUpcomming("IT Project Management 3.30 pm")
            }
            else if( 1516<=hourMin && hourMin<=1529){
                setSubject(null)
                setUpcomming("IT Project Management 3.30 pm")
            }
            else if( 1530<=hourMin && hourMin<=1730){
                setSubject("IT Project Management")
                setUpcomming("Logic Programming & Artificial Cognitive Systems 5.30 pm")
            }
            else if(1730<=hourMin && hourMin<=1930){
                setSubject("Logic Programming & Artificial Cognitive Systems")
                setUpcomming(null)
            }
        }
        else if(day==4){
            if(0<=hourMin && hourMin<=814){
                setSubject(null)
                setUpcomming("Communication Skills 8.30")
            }
            else if( 815<=hourMin && hourMin<=1015){
                setSubject("Communication Skills")
                setUpcomming("Union Hour 10.30 am")
            }
            else if( 1016<=hourMin && hourMin<=1029){
                setSubject(null)
                setUpcomming("Union Hour 10.30 am")
            }
            else if( 1030<=hourMin && hourMin<=1230){
                setSubject("Union Hour")
                setUpcomming("Enterprise Application Development Tutorial 1.15 pm")
            }
            else if( 1231<=hourMin && hourMin<=1314){
                setSubject(null)
                setUpcomming("Enterprise Application Development Tutorial 1.15 pm")
            }
            else if( 1315<=hourMin && hourMin<=1629){
                setSubject("Enterprise Application Development Tutorial")
                setUpcomming("Innovation Management Tutorial 3.30 pm")
            }
            else if( 1630<=hourMin && hourMin<=1930){
                setSubject("Innovation Management Tutorial")
                setUpcomming(null)
            }
        }
        else if(day==5){
            if(0<=hourMin && hourMin<=814){
                setSubject(null)
                setUpcomming("Logic Programming & Artificial Cognitive Systems 8.30")
            }
            else if( 815<=hourMin && hourMin<=1000){
                setSubject("Logic Programming & Artificial Cognitive Systems")
                setUpcomming("Business Studies Tutorial / Mobile & Wireless Networks 10.30 am")
            }
            else if( 1001<=hourMin && hourMin<=1029){
                setSubject(null)
                setUpcomming("Business Studies Tutorial / Mobile & Wireless Networks 10.30 am")
            }
            else if( 1030<=hourMin && hourMin<=1230){
                if(1030<=hourMin && hourMin<=1200){
                    setSubject("Business Studies Tutorial / Mobile & Wireless Networks")
                }
                else{
                    setSubject("Mobile & Wireless Networks")
                }
                setUpcomming("IT Project Management Tutorial 1.15 pm")
            }
            else if( 1231<=hourMin && hourMin<=1314){
                setSubject(null)
                setUpcomming("IT Project Management Tutorial 1.15 pm")
            }
            else if( 1315<=hourMin && hourMin<=1459){
                setSubject("IT Project Management Tutorial")
                setUpcomming("Automata Theory Tutorial 3.00 pm")
            }
            else if( 1500<=hourMin && hourMin<=1629){
                setSubject("Automata Theory Tutorial")
                setUpcomming("Independent Study 04.30 pm")
            }
            else if( 1430<=hourMin && hourMin<=1830){
                setSubject("Independent Study")
                setUpcomming(null)
            }
        }
    




        console.log(hourMin)


        let todayDate = year+'-'+month+'-'+date;
        setTodayDate(todayDate);

        let currentTime = hour+'.'+min;
        setCurrentTime(currentTime)
    }),[];

 
    
    return (
        <View style={styles.view} >
            <View style={styles.dropDownList}>
            <SelectList  setSelected={setSelected} data={data} onSelect={() => alert(selected)} />
            </View>
            <Image style={styles.image} source={require("../assets/Logo.png")} />
            
            <ScrollView refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={Notification}
            />
        } style={styles.scrollView}>
                <Text style={styles.nowGoing}>Now is Going...</Text>
                <Text style={styles.text}>{subject}</Text>
                <Text style={styles.nowGoing}>Comming up next...</Text>
                <Text style={styles.text}>{upcomming}</Text>

            </ScrollView>



                
                <TouchableOpacity style={styles.bubble} onPress={() => navigation.navigate("TimeTablePhoto")}><Text>{todayDate}</Text><Text >{currentTime}</Text><Text >Press here to download Timetable</Text></TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:"#F4F5F7",
        alignItems:"center",
        
    },
    image: {
        margin: 40,
        width:100,
        height:100,
        borderRadius:100/8
    },
    
    text:{
        margin:10,
        color:"black",
        fontSize:25,
        fontFamily:"sans-serif",
        textAlign:"center",
    },
    nowGoing:{
        fontFamily:"sans-serif-thin",
        textAlign:"center",
        color:"red",
        fontSize:40,
        margin:0,
    },
 
    bubble:{
        
        width:250,
        height:65,
        borderRadius:100,
        backgroundColor:'#F4F5F7',
        alignItems:'center',
        justifyContent:"flex-end",
        padding:10
        
    },
    dropDownList:{
        padding:40
    }
    
    
})