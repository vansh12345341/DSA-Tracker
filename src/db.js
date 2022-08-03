import Localbase from "localbase";

let db = new Localbase("db");
db.config.debug = false;

export function insertComplete(pos, topic, start, done, ques) {
  db.collection("complete").add(
    {
      topicName: topic,
      position: pos,
      started: start,
      doneQuestions: done,
      questions: ques,
    },
    topic
  );
}

export function insertBeginner(pos, topic, start, done, ques) {
  db.collection("beginner").add(
    {
      topicName: topic,
      position: pos,
      started: start,
      doneQuestions: done,
      questions: ques,
    },
    topic
  );
}

export function getData(topic) {
  db.collection("complete")
    .doc({ topicName: topic })
    .get()
    .then((complete) => {
      console.log(complete);
    });
}

export function getTopicData(key, callback) {
  db.collection("complete")
    .doc(key)
    .get()
    .then((document) => {
      callback(document);
    });
}

export function updateDBData(key, updateData) {
  console.log(updateData);
  db.collection("complete").doc(key).update(updateData).then(response => {
    console.log('Update successful, now do something.')
  })
  .catch(error => {
    console.log('There was an error, do something else.')
  });

  db.collection("complete")
    .doc(key)
    .get()
    .then((document) => {
      console.log(document);
    });
}
