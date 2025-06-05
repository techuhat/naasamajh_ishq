const poetryCollections = [
  {
    id: 1,
    title: "Naasamajh Ishq",
    description: "عشق کی تنہائی میں محبت کے جذبات",
    image: "image/1746861680.png",
    imageAlt: "Yeh shayari ka collection hai jo ishq ki gehraiyon aur uski na samajh paayi jaane wali khoobsurti ko dikhata hai.",
    poems: [
      {
        id: 101,
        title: "خواب وصال",
        content: "خواب میں دیکھا کہ تم آئے ہو\nہاتھ میں تمہارے گلاب کھلے ہیں\nآنکھوں میں نمی ہے، لبوں پر مسکراہٹ\nکیا تم مجھے یاد کرتے ہو؟"
      },
      {
        id: 102,
        title: "تنہائی کا سفر",
        content: "جب تنہائی کا سفر شروع ہوتا ہے\nہر راستہ تیری طرف جاتا ہے\nیادوں کی بارش میں بھیگ کر\nدل پھر سے تیرا نام لیتا ہے"
      },
      {
        id: 103,
        title: "چاند کی روشنی",
        content: "چاند کی روشنی میں تیرا چہرہ دیکھا\nستاروں کی چمک میں تیری آنکھیں دیکھیں\nرات بھر جاگ کر یادوں میں کھویا رہا\nصبح ہوئی تو پھر اداسی چھا گئی"
      }
    ]
  },
  {
    id: 2,
    title: "Ulfat e Jaan",
    description: "عشق کے سفر کی کہانیاں",
    image: "image/1746861746.png",
    imageAlt: "Yeh kitab roohani pyaar aur ulfat ko dikhati hai, jahan ishq ka rang dil aur rooh dono ko mehsoos hota hai.",
    poems: [
      {
        id: 201,
        title: "پہلی ملاقات",
        content: "وہ پہلی ملاقات یاد ہے مجھے\nجب تمہاری آنکھوں سے نظریں ملیں\nوقت تھم سا گیا تھا اس لمحے میں\nزندگی کا مقصد مل گیا تھا مجھے"
      },
      {
        id: 202,
        title: "انتظار",
        content: "انتظار تیرا ہر پل کرتا ہوں\nہر سانس میں تیرا نام لیتا ہوں\nآئو، میری زندگی کو سجا دو\nمیں تمہیں اپنی روح کا حصہ بناتا ہوں"
      },
      {
        id: 203,
        title: "جدائی",
        content: "جدائی کا غم ایسا کہ رات بھر نیند نہ آئے\nہر سانس میں تیری یاد سماتی جائے\nکاش تم سمجھ پاتے میرے دل کا حال\nمیرے آنسوؤں میں تیری تصویر نظر آئے"
      }
    ]
  },
  {
    id: 3,
    title: "Dil e Dastaan",
    description: "عشق کی پیچیدگیوں کی کہانیاں",
    image: "image/1746861781.png",
    imageAlt: "Har shayari ek kahani hai jo dil ke jazbaat aur dard ko behtareen tareeqe se bayan karti hai.",
    poems: [
      {
        id: 301,
        title: "بے وفائی",
        content: "بے وفائی کا شکوہ نہیں کرتا\nمیں کوئی کمزور انسان نہیں ہوں\nپر جب یاد آتی ہے تمہاری\nآنسو رُکتے نہیں، اختیار نہیں رہتا"
      },
      {
        id: 302,
        title: "خاموش محبت",
        content: "خاموش محبت کا قصہ سنا ہے کبھی؟\nوہ جو دل میں رہتی ہے، لبوں تک نہیں آتی\nنظروں میں چھپی رہتی ہے، الفاظ نہیں پاتی\nایسی ہی محبت کی ہے میں نے تم سے"
      },
      {
        id: 303,
        title: "آخری خط",
        content: "یہ آخری خط لکھتا ہوں تمہیں\nاس کے بعد کوئی پیغام نہ ملے گا\nبس اتنا جان لو کہ میں نے تم سے\nسچی محبت کی تھی، جو قبر تک ساتھ نبھاؤں گا"
      },
      // यहां अपनी नई शायरी जोड़ें
      {
        id: 304, // नई ID दें (मौजूदा IDs से अलग)
        title: "आपकी नई शायरी का शीर्षक", // उर्दू में शीर्षक
        content: "आपकी नई शायरी की सामग्री\nयहां नई लाइन के लिए \n का उपयोग करें" // उर्दू में सामग्री
      }
    ]
  }
];

// Local Storage functions
function savePoetryData() {
  localStorage.setItem('poetryCollections', JSON.stringify(poetryCollections));
}

function loadPoetryData() {
  const savedData = localStorage.getItem('poetryCollections');
  return savedData ? JSON.parse(savedData) : poetryCollections;
}

// Function to add a new poem to an existing collection
function addNewPoem(collectionId, poemTitle, poemContent) {
  const collection = poetryCollections.find(c => c.id === collectionId);
  if (collection) {
    // Generate a new ID for the poem
    const newId = Math.max(...collection.poems.map(p => p.id)) + 1;
    
    // Add the new poem
    collection.poems.push({
      id: newId,
      title: poemTitle,
      content: poemContent
    });
    
    // Save to local storage
    savePoetryData();
    return true;
  }
  return false;
}

// Function to add a new collection
function addNewCollection(title, description, imagePath, imageAlt) {
  // Generate a new ID
  const newId = Math.max(...poetryCollections.map(c => c.id)) + 1;
  
  // Create new collection
  poetryCollections.push({
    id: newId,
    title: title,
    description: description,
    image: imagePath,
    imageAlt: imageAlt,
    poems: []
  });
  
  // Save to local storage
  savePoetryData();
  return newId;
}

// Add at the end of file
window.poetryCollections = poetryCollections;
window.loadPoetryData = loadPoetryData;
window.savePoetryData = savePoetryData;
window.addNewPoem = addNewPoem;
window.addNewCollection = addNewCollection;
