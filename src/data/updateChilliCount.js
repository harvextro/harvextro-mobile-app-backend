import firestore from "@react-native-firebase/firestore";


export const updateChilliCount = async (type) => {

  const ref = firestore().collection("summary").doc("counts");

  await firestore().runTransaction(async (transaction) => {

    const doc = await transaction.get(ref);

    const data = doc.data();

    transaction.update(ref, {

      [type]: (data[type]) + 1,
      total: (data.total) + 1

    });

  });

  console.log("Updated chilli:", type);
  
};