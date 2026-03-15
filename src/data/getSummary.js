import firestore from "@react-native-firebase/firestore";

export const getSummary = async () => {

  const doc = await firestore()

    .collection("summary")
    .doc("counts")
    .get();

  if (doc.exists) {
    return doc.data();
  }

  return null;
  
};