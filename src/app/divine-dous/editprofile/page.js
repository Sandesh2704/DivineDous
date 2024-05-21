"use client";
import Footer from "@/HomePageComponents/Footer";
import { EditOptionsInput } from "@/InputComponents/EditeInput";
import formdata from "@/formdata";
import React, { useState } from "react";

export default function page() {
    const [edit, setedit] = useState({
        CreatedFor: "",
        Gender: "",
        FirstName: "",
        LastName: "",
        MaritalStatus: "",
        DateOfBirth: "",
        Height: "",
        Disability: "",
        HealthInformation: "",
        Diet: "",
        aboutYourself: "",
        ChurchName: "",
        ChurchAddress: "",
        IsBaptized: "",
        BaptismDate: "",
        FatherStatus: "",
        MotherStatus: "",
        FamilyType: "",
        FamilyTradition: "",
        AffluenceLevel: "",
        NoofSiblings: "",
        Religion: "",
        motherTongue: "",
        EthnicOrigin: "",
        denominations: "",
        NativeCity: "",
        LivingCountry: "",
        LivingState: "",
        LivingCity: "",
        ResidencyStatus: "",
        Qualification: "",
        Degree: "",
        WorkingSector: "",
        WorkingAsRole: "",
        WorkingWith: "",
        Salary: "",
        GamilAddress: "",
        passward: "",
        ReEnterpassward: "",
        number: "",

        lookingforMaxAge: "",
        lookingforMinAge: "",
        lookingforMaxHeight: "",
        lookingforMinHeight: "",
        lookingforMaritalStatus: "",
        lookingforEthnicOrigin: "",
        lookingforReligion: "",
        lookingforDenomination: "",
        lookingforAnnualIncome: "",
        lookingforProfileCreatedby: "",
        lookingforDiet: "",
        lookingforCountryLiving: "",
        lookingforStateLiving: "",
        lookingforCity: "",
        lookingforQualification: "",
        lookingforDegree: "",
        lookingforWorkingSector: "",
        lookingforWorkingAsRole: "",
    });
    const [mulyipleUsers, setmulyipleUsers] = useState([]);

    const edithandler = (e) => {
        setedit((currentData) => {
            return { ...currentData, [e.target.name]: e.target.value };
        });
    };

    const ageOptions = [];
    const heightOptions = [];
    for (let age = 18; age <= 55; age++) {
        ageOptions.push(age);
    }
    for (let feet = 4; feet <= 9; feet++) {
        for (let inches = 0; inches <= 12; inches++) {
            heightOptions.push(`${feet}ft ${inches}in`);
        }
    }

    return (
        <>
            <div className="flex justify-center px-0 lg:px-11">
                <div className="w-[98%]  md:w-[80%] lg:w-[65%] p-2 lg:p-4  mb-16 mt-3  flex flex-col gap-y-2 md:gap-y-5">
                    <h1 className="text-gray-500 text-base md:text-xl ">
                        Edit Personal Profile
                    </h1>
                    <div className="bg-white px-3 py-1">
                        <h1 className="py-2 border-b-2 border-gray-300 text-gray-500 text-base md:text-xl ">
                            Basic Info
                        </h1>
                        <div className="flex flex-col md:grid grid-cols-2 w-full text-sm md:text-base py-5 gap-y-2 ">
                            <div className="flex flex-col px-0 md:px-3 gap-y-2 md:gap-y-4 border-r-0 md:border-r-2 border-gray-300">
                                <div className="grid grid-cols-2   items-center ">
                                    <label className=" text-sm md:text-base peer-focus:text-black">
                                        Date of Brith
                                    </label>
                                    <input
                                        type="date"
                                        id="DateOfBirth"
                                        name="DateOfBirth"
                                        value={edit.DateOfBirth}
                                        onChange={edithandler}
                                        className="w-full peer   rounded border-2 bg-transparent px-3 py-1 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none"
                                    />
                                </div>
                                <div className="grid grid-cols-2   items-center ">
                                    <label className=" text-sm md:text-base peer-focus:text-black">
                                        Height
                                    </label>
                                    <EditOptionsInput
                                        name="Height"
                                        options={heightOptions}
                                        inputHandler={edithandler}
                                        label="Your-Height"
                                        className="w-full"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col px-0 md:px-3 gap-y-2  md:gap-y-4">
                                <div className="grid grid-cols-2   items-center ">
                                    <label className=" text-sm md:text-base peer-focus:text-black">
                                        Marital Status
                                    </label>
                                    <EditOptionsInput
                                        name="MaritalStatus"
                                        options={formdata.Status}
                                        inputHandler={edithandler}
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white px-3 py-1">
                        <h1 className="py-2 border-b-2 border-gray-300 text-gray-500 text-base md:text-xl ">
                            Religious Background
                        </h1>
                        <div className="flex flex-col md:grid grid-cols-2 w-full text-sm md:text-base py-5 gap-y-2 ">
                            <div className="flex flex-col px-0 md:px-3 gap-y-2 md:gap-y-4 border-r-0 md:border-r-2 border-gray-300">
                                <div className="grid grid-cols-2   items-center ">
                                    <label className=" text-sm md:text-base peer-focus:text-black">
                                        Religion
                                    </label>
                                    <EditOptionsInput
                                        name="Religion"
                                        options={formdata.Religion}
                                        inputHandler={edithandler}
                                        label="Your-Height"
                                        className="w-full"
                                    />
                                </div>
                                <div className="grid grid-cols-2   items-center ">
                                    <label className=" text-sm md:text-base peer-focus:text-black">
                                        Denominations
                                    </label>
                                    <EditOptionsInput
                                        name="denominations"
                                        options={formdata.denominations}
                                        inputHandler={edithandler}
                                        label="Your-Height"
                                        className="w-full"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col px-0 md:px-3 gap-y-2  md:gap-y-4">
                                <div className="grid grid-cols-2   items-center ">
                                    <label className=" text-sm md:text-base peer-focus:text-black">
                                        Ethnic Origin
                                    </label>
                                    <EditOptionsInput
                                        name="EthnicOrigin"
                                        options={formdata.EthnicOrigin}
                                        inputHandler={edithandler}
                                        className="w-full"
                                    />
                                </div>
                                <div className="grid grid-cols-2   items-center ">
                                    <label className=" text-sm md:text-base peer-focus:text-black">
                                        Mother Tongue
                                    </label>
                                    <EditOptionsInput
                                        name="EthnicOrigin"
                                        options={formdata.motherTongue}
                                        inputHandler={edithandler}
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
