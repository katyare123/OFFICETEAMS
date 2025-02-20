import React, { useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import PushNotification from 'react-native-push-notification';


const thoughts = [
  "Believe in yourself and all that you are.",
  "You are stronger than you think.",
  "Every day is a second chance.",
  "Dream big and dare to fail.",
  "Stay positive, work hard, make it happen.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Happiness depends upon ourselves.",
  "Do what you can, with what you have, where you are.",
  "Act as if what you do makes a difference. It does.",
  "Keep your face always toward the sunshine—and shadows will fall behind you.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "The only way to do great work is to love what you do.",
  "Courage is resistance to fear, mastery of fear, not absence of fear.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "The best way to predict the future is to create it.",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  "Success usually comes to those who are too busy to be looking for it.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Everything you’ve ever wanted is on the other side of fear.",
  "Opportunities don’t happen. You create them.",
  "It is not in the stars to hold our destiny but in ourselves.",
  "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
  "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
  "It always seems impossible until it’s done.",
  "If you are not willing to risk the usual, you will have to settle for the ordinary.",
  "Success is not how high you have climbed, but how you make a positive difference to the world.",
  "Your limitation—it’s only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Stay focused and never give up.",
  "Don’t stop until you’re proud.",
  "Difficult roads often lead to beautiful destinations.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Do something today that your future self will thank you for.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Don’t wait for opportunity. Create it.",
  "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
  "The key to success is to focus on goals, not obstacles.",
  "Believe you can and you’re halfway there.",
  "You are never too old to set another goal or to dream a new dream.",
  "Everything you can imagine is real.",
  "Do what you love and you’ll never have a problem with Monday.",
  "Doubt kills more dreams than failure ever will.",
  "You don’t have to be great to start, but you have to start to be great.",
  "Act as if it were impossible to fail.",
  "Even the darkest night will end and the sun will rise.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Fall seven times and stand up eight.",
  "Never regret a day in your life. Good days give happiness, bad days give experience.",
  "Go the extra mile. It’s never crowded.",
  "Work hard in silence, let your success be your noise.",
  "A goal without a plan is just a wish.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "Energy and persistence conquer all things.",
  "The only place where success comes before work is in the dictionary.",
  "The secret of getting ahead is getting started.",
  "Difficulties in life are intended to make us better, not bitter.",
  "Be not afraid of going slowly, be afraid only of standing still.",
  "Do the best you can until you know better. Then when you know better, do better.",
  "You don’t have to control your thoughts. You just have to stop letting them control you.",
  "If you can dream it, you can achieve it."
];

const App = () => {
  useEffect(() => {
    createNotificationChannel();
    scheduleHourlyNotifications();
  }, []);

  const createNotificationChannel = () => {
    PushNotification.createChannel(
      {
        channelId: "motivation-channel",
        channelName: "Motivation Notifications",
      },
      (created) => console.log(`Channel created: ${created}`)
    );
  };

  const scheduleHourlyNotifications = () => {
    PushNotification.cancelAllLocalNotifications();
    let now = new Date();
    for (let i = 1; i <= 12; i++) {
      let notificationTime = new Date(now.getTime() + i * 60 * 60 * 1000);
      PushNotification.localNotificationSchedule({
        channelId: "motivation-channel",
        title: "✨ Daily Motivation ✨",
        message: thoughts[Math.floor(Math.random() * thoughts.length)],
        date: notificationTime,
        allowWhileIdle: true,
        soundName: "default",
      });
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
        Stay Motivated! 🚀
      </Text>
      <Button title="Send Test Notification" onPress={() => {
        PushNotification.localNotification({
          channelId: "motivation-channel",
          title: "✨ Daily Motivation ✨",
          message: thoughts[Math.floor(Math.random() * thoughts.length)],
          soundName: "default",
        });
      }} />
    </View>
  );
};

export default App;
