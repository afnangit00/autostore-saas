"use client";

import { useEffect, useState } from "react";

export default function SettingsPage() {

  const [name, setName] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [loading, setLoading] =
    useState(false);


  useEffect(() => {

    async function getStore(){

      const res = await fetch("/api/store/settings");

      const data =
        await res.json();


      if(data.store){

        setName(
          data.store.name
        );

        setDescription(
          data.store.description
        );

      }

    }


    getStore();

  },[]);



  async function updateStore(){

    try{

      setLoading(true);


      const res =
        await fetch(
          "/api/store/settings",
          {
            method:"PUT",

            headers:{
              "Content-Type":
              "application/json"
            },

            body:JSON.stringify({

              name,

              description

            })

          }
        );


      const data =
        await res.json();


      if(data.success){

        alert(
          "Store Updated"
        );

      }


    }
    catch(error){

      console.log(error);

    }
    finally{

      setLoading(false);

    }

  }



  return (

    <div>

      <h1
        className="
        text-3xl
        font-bold
        mb-6
        "
      >
        Store Settings
      </h1>



      <div
        className="
        max-w-xl
        space-y-4
        "
      >


        <input

          value={name}

          onChange={
            e =>
            setName(
              e.target.value
            )
          }

          placeholder="Store Name"

          className="
          border
          p-3
          w-full
          "
        />



        <textarea

          value={description}

          onChange={
            e =>
            setDescription(
              e.target.value
            )
          }

          placeholder="Description"

          className="
          border
          p-3
          w-full
          "
        />



        <button

          onClick={
            updateStore
          }

          disabled={loading}

          className="
          border
          px-5
          py-3
          "
        >

          {
          loading
          ?
          "Saving..."
          :
          "Save Changes"
          }


        </button>


      </div>


    </div>

  );

}   