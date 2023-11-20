import SelectBirth from "./SelectBirth";
import { useContext, useState } from "react";
import { query } from "firebase/database";
import { v4 as UID } from "uuid";
import { collection, onSnapshot, where } from "firebase/firestore";
import { defaultImage } from "../../Images/DefaultImage";
import { addDocument } from "../../firebase/services";
import { database } from "../../firebase/firebaseConfig";
import { AppContext } from "../../Contexts/AppProvider";
import { Form, Input } from "antd";


const optionDays = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32
]

const optionMonths =[
    "Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"
]

const optionYears =[
    2023,2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000
]


function CustomModals() {
    const {setIsCreateAccountVisible} = useContext(AppContext)
    const [form] = Form.useForm()
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedGender, setSelectedGender] = useState(false);

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
    };
    
    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };
    
    const handleCheckFemale = () => {
        setSelectedGender(false);
    };

    const handleCheckMale = () => {
        setSelectedGender(true);
    };

    const generateUID = () =>{
        const uid = UID().replace(/-/g, '');
        return uid;
    }

    const checkAndCreateUID = async(UID) =>{
        const condition = {
            fieldName: 'uid',
            operator: '==',
            compareValue: UID
        }
        
        let collectionRef = query(collection(database,'users'));
        collectionRef = query(collectionRef, where(condition.fieldName, condition.operator,condition.compareValue));
        
        return new Promise((resolve,reject)=>{
            const unsubscribe = onSnapshot(collectionRef, (snapshot) =>{
                const dataUid = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                
                if(dataUid.length > 0){
                    const newUID = generateUID();
                    unsubscribe();
                    resolve(checkAndCreateUID(newUID));
                }else{
                    unsubscribe();
                    resolve(UID);
                }
                
            })

        })

    }

    const handleSubmit = async() =>{
        let uid = generateUID();
        uid = await checkAndCreateUID(uid);
        
        
        const data ={
            uid: uid,
            email: form.getFieldValue('email'),
            displayName: form.getFieldValue('firstName') +' '+ form.getFieldValue('lastName'),
            password: form.getFieldValue('password'),
            date: selectedDate,
            month: selectedMonth,
            year: selectedYear,
            gender: selectedGender,
            photoURL: defaultImage
        } 
        
        addDocument('users',data);

        form.resetFields();
        setIsCreateAccountVisible(false);
    }

    return ( 
        <div className="space-y-2">
            <div className="font-bold text-3xl">Đăng ký</div>
            <div>Nhanh chóng và dễ dàng</div>
            <hr/>

            <div className="space-y-3">
                <Form form={form} className="space-y-3" method="post">
                    <div className="flex space-x-3">
                            <div className="flex-grow">
                                <Form.Item name="firstName">
                                    <Input
                                    className="text-lg"
                                    type="text"
                                    placeholder="Họ"
                                    />
                                </Form.Item>
                            </div>

                             <div  className="flex-grow">
                                 <Form.Item name="lastName">
                                     <Input
                                    className="text-lg"
                                    type="text"
                                    placeholder="Tên"
                                    />
                                 </Form.Item>
                             </div>
                    </div>

                    <div>
                            <div>
                                <Form.Item name="email">
                                    <Input
                                     className=" text-lg"
                                     type="text"
                                     name="email"
                                     placeholder="Email"
                                    />
                                </Form.Item>
                            </div>
                    </div>

                    <div>
                            <div>
                                <Form.Item name="password">
                                    <Input
                                     className="text-lg"
                                     type="password"
                                     id="password"
                                     placeholder="Mật khẩu mới"
                                    />
                                </Form.Item>
                            </div>
                    </div>
                    
                    <div>
                        <div>Sinh nhật</div>
                        <div className="flex justify-around space-x-3">
                           <SelectBirth option={optionDays} onChange={handleDateChange}/>
                           <SelectBirth option={optionMonths} month onChange={handleMonthChange}/>
                           <SelectBirth option={optionYears} onChange={handleYearChange}/>
                        </div>
                    </div>

                    <div>
                        <div>Giới tính</div>
                        <div className="flex space-x-2">
                            <div className="flex space-x-2 rounded-md border-2 border-gray-300 p-1 flex-grow items-center justify-center">
                                <label>Nữ</label>
                                <input type="radio" name="gender" onChange={handleCheckFemale}  />
                            </div>
                            <div className="flex space-x-2 rounded-md border-2 border-gray-300 p-1 flex-grow items-center justify-center">
                                <label>Nam</label>
                                <input type="radio" name="gender" onChange={handleCheckMale}  />
                            </div>
                        </div>
                    </div>

                    <div className="flex pt-5">
                        <button onClick={handleSubmit} className="flex-grow bg-green-500 rounded-lg p-2 w-1/2 text-white font-bold text-lg hover:bg-green-800">Đăng ký</button>
                    </div>
                    
                </Form>
            </div>
        </div>
     );
}

export default CustomModals;