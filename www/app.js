/* الجانب العاطفي من الإسلام — THE EMOTIONAL SIDE OF ISLAM — app.js v1.0 */
/* Based on "Al-Janib al-Atifi min al-Islam" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'الجانب العاطفي من الإسلام',
    splashSub: 'قلب المؤمن بين الحب والخشية',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة آل عمران ٣: ٣١',
    tabHome: 'الرئيسية', tabTraits: 'المشاعر', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    traitsTitle: 'مشاعر المؤمن',
    traitsDesc: '١٥ عاطفة إسلامية من كتاب الشيخ محمد الغزالي — كل عاطفة بآية وحديث وتطبيق عملي',
    quizTitle: '🏆 من سيصبح عالِماً؟',
    quizDesc: 'اختبر ذكاءك العاطفي الإسلامي — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي العاطفية',
    progressDesc: 'تقدمك وإنجازاتك في رحلة المشاعر',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية المشاعر',
    dailyLabel: '✨ عاطفة اليوم',
    searchPlaceholder: 'ابحث في المشاعر...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحديث',
    apply: '💡 طبّق الآن',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '١٥ عاطفة إسلامية من كتاب الجانب العاطفي',
      'مسابقة "من سيصبح عالماً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: 'The Emotional Side of Islam',
    splashSub: "The believer's heart between love and awe",
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al Imran 3:31',
    tabHome: 'Home', tabTraits: 'Emotions', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    traitsTitle: "The Believer's Emotions",
    traitsDesc: "15 Islamic emotions from Sheikh al-Ghazali — each with a verse, hadith, and practical application",
    quizTitle: '🏆 Who Wants to Be a Scholar?',
    quizDesc: 'Test your Islamic emotional intelligence — 4 choices per question',
    progressTitle: 'My Emotional Journey',
    progressDesc: 'Your progress and achievements in the emotional journey',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for the Heart',
    dailyLabel: "✨ Today's Emotion",
    searchPlaceholder: 'Search emotions...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Hadith',
    apply: '💡 Apply Now',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      "15 Islamic emotions from The Emotional Side of Islam",
      '"Who Wants to Be a Scholar?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: "Le Cote Emotionnel de l'Islam",
    splashSub: "Le coeur du croyant entre amour et crainte reverentielle",
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al Imran 3:31',
    tabHome: 'Accueil', tabTraits: 'Emotions', tabQuiz: 'Quiz',
    tabProgress: 'Progres', tabAbout: 'Livre',
    traitsTitle: 'Les Emotions du Croyant',
    traitsDesc: "15 emotions islamiques du livre du Sheikh al-Ghazali — chacune avec un verset, un hadith et une application pratique",
    quizTitle: '🏆 Qui Veut Devenir Savant ?',
    quizDesc: "Testez votre intelligence emotionnelle islamique — 4 choix par question",
    progressTitle: 'Mon Parcours Emotionnel',
    progressDesc: 'Vos progres et realisations dans le parcours emotionnel',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas pour le Coeur',
    dailyLabel: "✨ Emotion du Jour",
    searchPlaceholder: 'Rechercher les emotions...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Appliquez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Experience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consecutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Ref. Coran',
    correct: 'Bravo ! Bonne reponse ! 🎉',
    wrong: 'Reessayez la prochaine fois 💪',
    quizComplete: 'Quiz Termine !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Debutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Perseverant',
    badge_expert: 'Expert',
    splashFeatures: [
      "15 emotions islamiques du livre Le Cote Emotionnel de l'Islam",
      'Quiz « Qui Veut Devenir Savant ? » avec recompenses',
      'Systeme de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 15 EMOTIONAL CARDS DATA ═══════════════
const TRAITS = [
  {
    id:1, emoji:'💖',
    ar:{title:'الحب في العبادة',desc:'يرى الغزالي أن الإسلام ليس ديناً بارداً يقتصر على الأحكام، بل يملأ القلب حباً ورحمة وبهجة. العبادة بلا عاطفة كالجسد بلا روح. المؤمن يصلي لأنه يحب لقاء الله — وهذا جوهر كتاب الجانب العاطفي من الإسلام.',verse:'قُلْ إِنْ كُنْتُمْ تُحِبُّونَ اللَّهَ فَاتَّبِعُونِي يُحْبِبْكُمُ اللَّهُ',verseRef:'آل عمران ٣١',hadith:'جُعلت قرة عيني في الصلاة — رواه النسائي',action:'صلِّ اليوم ركعتين وأنت تستشعر أنك تقف أمام حبيبك — تحدث إلى الله بقلبك',young:'الله يحبك! وعندما تصلي فأنت تتحدث مع أحب واحد إليك 💖'},
    en:{title:'Love in Worship',desc:'Al-Ghazali in this book affirms: Worship in Islam is not dry ritual but a relationship of love between servant and Lord. The believer prays because they love meeting God and yearn for intimate conversation with Him. Prayer is the delight of the lover, not a burden on the shoulders.',verse:'Say: If you love Allah, then follow me, and Allah will love you',verseRef:'Al Imran 31',hadith:'The delight of my eyes was made in prayer — An-Nasai',action:'Pray two extra units today feeling you stand before your Beloved — speak to God with your heart',young:'Allah loves you! When you pray, you are talking to the One who loves you most 💖'},
    fr:{title:"L'Amour dans l'Adoration",desc:"L'adoration en Islam n'est pas un rituel sec mais une relation d'amour entre le serviteur et son Seigneur. Le croyant prie parce qu'il aime rencontrer Dieu et aspire a Son dialogue intime. La priere est la joie de l'amoureux, pas un fardeau.",verse:"Dis : Si vous aimez Allah, suivez-moi, Allah vous aimera",verseRef:'Al Imran 31',hadith:'La douceur de mes yeux a ete placee dans la priere — An-Nasai',action:"Priez deux unites supplementaires aujourd'hui en sentant que vous etes devant votre Bien-Aime",young:"Allah t'aime ! Quand tu pries, tu parles a Celui qui t'aime le plus 💖"}
  },
  {
    id:2, emoji:'🤲',
    ar:{title:'الرحمة',desc:'يؤكد الغزالي في هذا الكتاب: الرحمة ليست ضعفاً بل هي جوهر الإسلام العاطفي. الله وصف نفسه بالرحمن الرحيم وجعل الرحمة فوق عرشه. المسلم الذي لا يرحم محروم من أعظم صفات الإيمان.',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ',verseRef:'الأنبياء ١٠٧',hadith:'الراحمون يرحمهم الرحمن — رواه الترمذي',action:'ارحم شخصاً اليوم: طفلاً صغيراً أو مسناً أو حيواناً — وتأمل كيف يلين قلبك',young:'كن رحيماً مع الجميع! حتى مع القطط والعصافير — الله يحب الرحماء 🤲'},
    en:{title:'Mercy',desc:'Al-Ghazali in this book affirms: Mercy is not weakness but the emotional core of Islam. Allah described Himself as the Most Merciful and placed mercy above His Throne. A Muslim who shows no mercy is deprived of the greatest quality of faith.',verse:'And We have not sent you except as a mercy to the worlds',verseRef:'Al-Anbiya 107',hadith:'The merciful are shown mercy by the Most Merciful — Tirmidhi',action:'Show mercy to someone today: a small child, an elderly person, or an animal — and notice how your heart softens',young:'Be merciful to everyone! Even to cats and birds — Allah loves the merciful 🤲'},
    fr:{title:'La Misericorde',desc:"La misericorde n'est pas une faiblesse mais le coeur emotionnel de l'Islam. Allah S'est decrit comme le Tout Misericordieux et a place la misericorde au-dessus de Son Trone. Un musulman sans misericorde est prive de la plus grande qualite de la foi.",verse:"Et Nous ne t'avons envoye qu'en misericorde pour les mondes",verseRef:'Al-Anbiya 107',hadith:'Les misericordieux recevront la misericorde du Tout Misericordieux — Tirmidhi',action:"Montrez de la misericorde a quelqu'un aujourd'hui : un enfant, une personne agee ou un animal",young:"Sois misericordieux avec tout le monde ! Meme avec les chats et les oiseaux — Allah aime les misericordieux 🤲"}
  },
  {
    id:3, emoji:'💝',
    ar:{title:'الشفقة والحنان',desc:'يؤكد الغزالي في هذا الكتاب: الشفقة عاطفة تجعل قلبك يتألم لألم الآخرين. النبي كان أحن الناس وكان يبكي لبكاء الطفل في الصلاة فيخففها. الشفقة ليست مجرد شعور بل دافع للعمل والإغاثة.',verse:'ثُمَّ كَانَ مِنَ الَّذِينَ آمَنُوا وَتَوَاصَوْا بِالصَّبْرِ وَتَوَاصَوْا بِالْمَرْحَمَةِ',verseRef:'البلد ١٧',hadith:'مثل المؤمنين في توادهم كمثل الجسد الواحد إذا اشتكى منه عضو تداعى له سائر الجسد — متفق عليه',action:'اسأل شخصاً حزيناً اليوم: كيف حالك حقاً؟ واستمع إليه بكل قلبك',young:'إذا رأيت صديقاً حزيناً، اجلس بجانبه وقل له: أنا معك! هذه هي الشفقة 💝'},
    en:{title:'Compassion and Tenderness',desc:'Al-Ghazali in this book affirms: Compassion is an emotion that makes your heart ache for the pain of others. The Prophet was the most tender-hearted of people — he would shorten prayer upon hearing a child cry. Compassion is not just a feeling but a drive to act and help.',verse:'Then he was among those who believed and advised one another to patience and mercy',verseRef:'Al-Balad 17',hadith:'The believers in their mutual love are like one body — when one part aches, the whole body responds — Agreed upon',action:'Ask someone who looks sad today: how are you really? And listen to them with all your heart',young:'If you see a sad friend, sit beside them and say: I am with you! That is compassion 💝'},
    fr:{title:'La Compassion et la Tendresse',desc:"La compassion est une emotion qui fait souffrir votre coeur pour la douleur des autres. Le Prophete etait le plus tendre des gens — il abreviait la priere en entendant un enfant pleurer. La compassion n'est pas qu'un sentiment mais un moteur d'action.",verse:'Puis il etait parmi ceux qui croyaient et se recommandaient la patience et la misericorde',verseRef:'Al-Balad 17',hadith:'Les croyants dans leur amour mutuel sont comme un seul corps — quand un membre souffre, tout le corps reagit — Unanimement reconnu',action:"Demandez a quelqu'un de triste aujourd'hui : comment vas-tu vraiment ? Ecoutez avec tout votre coeur",young:"Si tu vois un ami triste, assieds-toi a cote de lui et dis : je suis avec toi ! C'est ca la compassion 💝"}
  },
  {
    id:4, emoji:'😊',
    ar:{title:'الفرح والبهجة',desc:'يؤكد الغزالي في هذا الكتاب: الإسلام دين الفرح لا الكآبة. الله يحب أن يرى أثر نعمته على عبده. الابتسامة صدقة والفرح بنعم الله عبادة. من حرم نفسه الفرح المباح فقد ظلم نفسه.',verse:'قُلْ بِفَضْلِ اللَّهِ وَبِرَحْمَتِهِ فَبِذَلِكَ فَلْيَفْرَحُوا',verseRef:'يونس ٥٨',hadith:'تبسمك في وجه أخيك صدقة — رواه الترمذي',action:'ابتسم اليوم عشرين مرة على الأقل — وانشر الفرح حولك بكلمة طيبة',young:'ابتسم! الابتسامة هدية مجانية تجعل الجميع سعداء — والله يحب الفرحين 😊'},
    en:{title:'Joy and Delight',desc:'Al-Ghazali in this book affirms: Islam is a religion of joy, not gloom. Allah loves to see the effect of His blessings on His servant. A smile is charity and rejoicing in God is an act of worship. Whoever deprives themselves of permissible joy has wronged themselves.',verse:'Say: In the bounty of Allah and in His mercy, in that let them rejoice',verseRef:'Yunus 58',hadith:'Your smile in the face of your brother is an act of charity — Tirmidhi',action:'Smile at least twenty times today — and spread joy around you with a kind word',young:'Smile! A smile is a free gift that makes everyone happy — and Allah loves joyful people 😊'},
    fr:{title:'La Joie et l\'Allegresse',desc:"L'Islam est une religion de joie, pas de morosite. Allah aime voir l'effet de Ses bienfaits sur Son serviteur. Le sourire est une charite et se rejouir en Dieu est un acte d'adoration. Celui qui se prive de joie licite se fait du tort.",verse:'Dis : C\'est par la grace d\'Allah et par Sa misericorde qu\'ils doivent se rejouir',verseRef:'Yunus 58',hadith:'Ton sourire au visage de ton frere est une charite — Tirmidhi',action:"Souriez au moins vingt fois aujourd'hui — et repandez la joie autour de vous",young:"Souris ! Le sourire est un cadeau gratuit qui rend tout le monde heureux — et Allah aime les joyeux 😊"}
  },
  {
    id:5, emoji:'😢',
    ar:{title:'الحزن والبكاء',desc:'يؤكد الغزالي في هذا الكتاب: الحزن عاطفة إنسانية لم يُنكرها الإسلام. النبي بكى على ابنه إبراهيم وقال: العين تدمع والقلب يحزن. الحزن المحمود هو الذي يقرّب من الله لا الذي يُبعد عن العمل.',verse:'وَتَوَلَّى عَنْهُمْ وَقَالَ يَا أَسَفَى عَلَى يُوسُفَ وَابْيَضَّتْ عَيْنَاهُ مِنَ الْحُزْنِ',verseRef:'يوسف ٨٤',hadith:'إن العين تدمع والقلب يحزن ولا نقول إلا ما يرضي ربنا — متفق عليه',action:'إذا شعرت بالحزن اليوم، لا تكتمه — عبّر عنه بالدعاء وتحدث مع من تثق به',young:'لا بأس أن تبكي! حتى النبي بكى. لكن بعد البكاء، تحدث مع الله وستشعر بالراحة 😢'},
    en:{title:'Grief and Tears',desc:'Al-Ghazali in this book affirms: Grief is a human emotion that Islam does not deny. The Prophet wept for his son Ibrahim and said: The eye sheds tears and the heart grieves. Praiseworthy grief is that which draws one closer to God, not that which paralyzes action.',verse:'And he turned away from them and said: How great is my grief for Yusuf! And his eyes became white from sadness',verseRef:'Yusuf 84',hadith:'The eye sheds tears and the heart grieves, and we say nothing except what pleases our Lord — Agreed upon',action:'If you feel sad today, do not suppress it — express it through supplication and speak to someone you trust',young:'It is okay to cry! Even the Prophet cried. But after crying, talk to Allah and you will feel better 😢'},
    fr:{title:'Le Chagrin et les Larmes',desc:"Le chagrin est une emotion humaine que l'Islam ne nie pas. Le Prophete a pleure pour son fils Ibrahim en disant : L'oeil verse des larmes et le coeur s'attriste. Le chagrin louable est celui qui rapproche de Dieu, pas celui qui paralyse.",verse:"Il se detourna d'eux et dit : Que mon chagrin est grand pour Yusuf ! Et ses yeux blanchirent de tristesse",verseRef:'Yusuf 84',hadith:"L'oeil verse des larmes et le coeur s'attriste, et nous ne disons que ce qui plait a notre Seigneur — Unanimement reconnu",action:"Si vous etes triste aujourd'hui, ne le refoulez pas — exprimez-le par la priere et parlez a quelqu'un de confiance",young:"Ce n'est pas grave de pleurer ! Meme le Prophete a pleure. Mais apres, parle a Allah et tu te sentiras mieux 😢"}
  },
  {
    id:6, emoji:'🌟',
    ar:{title:'الرجاء والأمل',desc:'يؤكد الغزالي في هذا الكتاب: الرجاء في رحمة الله محرك القلب المؤمن. مهما أذنب المسلم فلا يقنط من رحمة الله. الأمل ليس تمنياً فارغاً بل هو ثقة بالله مع السعي والعمل.',verse:'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَى أَنْفُسِهِمْ لَا تَقْنَطُوا مِنْ رَحْمَةِ اللَّهِ',verseRef:'الزمر ٥٣',hadith:'لو يعلم المؤمن ما عند الله من العقوبة ما طمع بجنته أحد ولو يعلم الكافر ما عند الله من الرحمة ما قنط من رحمته أحد — متفق عليه',action:'أعد إحياء أمل كنت قد تخليت عنه — وقل: مع الله كل شيء ممكن',young:'لا تفقد الأمل أبداً! الله أكبر من أي مشكلة — ودائماً بعد الليل يأتي الصباح 🌟'},
    en:{title:'Hope and Expectation',desc:'Al-Ghazali in this book affirms: Hope in God is the engine of the believing heart. No matter how much a Muslim sins, they never despair of God. Hope is not empty wishing but confident trust in God accompanied by effort and action.',verse:'Say: O My servants who have transgressed against themselves, do not despair of the mercy of Allah',verseRef:'Az-Zumar 53',hadith:'If the believer knew what punishment God has, no one would hope for His Paradise; and if the disbeliever knew what mercy God has, no one would despair — Agreed upon',action:'Revive a hope you had given up on — and say: with God, everything is possible',young:'Never lose hope! Allah is bigger than any problem — and morning always comes after night 🌟'},
    fr:{title:"L'Espoir et l'Attente",desc:"L'espoir en Dieu est le moteur du coeur croyant. Peu importe les peches d\'un musulman, il ne desespere jamais de la misericorde de Dieu. L'espoir n'est pas un souhait vide mais une confiance en Dieu accompagnee d'efforts.",verse:'Dis : O Mes serviteurs qui avez commis des exces, ne desesperez pas de la misericorde d\'Allah',verseRef:'Az-Zumar 53',hadith:"Si le croyant savait quel chatiment Dieu a, personne n'espererait Son Paradis ; et si le mecreant savait quelle misericorde Dieu a, personne n'en desespererait — Unanimement reconnu",action:"Ravivez un espoir que vous aviez abandonne — et dites : avec Dieu, tout est possible",young:"Ne perds jamais espoir ! Allah est plus grand que tout probleme — et le matin vient toujours apres la nuit 🌟"}
  },
  {
    id:7, emoji:'🙏',
    ar:{title:'الخشية المتوازنة',desc:'يؤكد الغزالي: خشية الله ليست رعباً يشل الإنسان بل هي يقظة القلب الحبيب. الخشية الحقيقية توازن بين الخوف من عقاب الله والرجاء في رحمته. المؤمن يعبد الله بين جناحي الخوف والرجاء.',verse:'تَتَجَافَى جُنُوبُهُمْ عَنِ الْمَضَاجِعِ يَدْعُونَ رَبَّهُمْ خَوْفًا وَطَمَعًا',verseRef:'السجدة ١٦',hadith:'لو تعلمون ما أعلم لضحكتم قليلاً ولبكيتم كثيراً — متفق عليه',action:'تأمل الليلة قبل النوم: ما الذي يجعلني أخشى الله وأحبه في الوقت نفسه؟',young:'الله رحيم جداً لكنه أيضاً عظيم! اخشَه كما تخشى أن تُغضب أحبّ الناس إليك 🙏'},
    en:{title:'Balanced Awe of God',desc:'Al-Ghazali affirms: Awe of God is not paralyzing terror but the wakefulness of a loving heart. True reverence balances fear of punishment with hope in mercy. The believer worships God between the two wings of fear and hope.',verse:'Their sides forsake their beds; they call upon their Lord in fear and hope',verseRef:'As-Sajdah 16',hadith:'If you knew what I know, you would laugh little and weep much — Agreed upon',action:'Reflect tonight before sleep: what makes me fear God and love Him at the same time?',young:'Allah is very Merciful but also very Great! Be in awe of Him like you would not want to upset someone you love most 🙏'},
    fr:{title:'La Crainte Equilibree de Dieu',desc:"La crainte de Dieu n'est pas une terreur paralysante mais l'eveil d\'un coeur aimant. La vraie crainte equilibre la peur du chatiment et l'espoir en la misericorde. Le croyant adore Dieu entre les deux ailes de la crainte et de l'espoir.",verse:'Leurs flancs s\'arrachent des lits ; ils invoquent leur Seigneur par crainte et par espoir',verseRef:'As-Sajdah 16',hadith:'Si vous saviez ce que je sais, vous ririez peu et pleureriez beaucoup — Unanimement reconnu',action:"Reflechissez ce soir avant de dormir : qu'est-ce qui me fait craindre Dieu et L'aimer en meme temps ?",young:"Allah est tres Misericordieux mais aussi tres Grand ! Crains-Le comme tu ne voudrais pas attrister celui que tu aimes le plus 🙏"}
  },
  {
    id:8, emoji:'🧠',
    ar:{title:'الذكاء العاطفي',desc:'يؤكد الغزالي: الإسلام سبق علم النفس الحديث في تعليم الذكاء العاطفي. النبي كان يراعي مشاعر كل شخص ويخاطبه بما يناسبه. فهم مشاعرك ومشاعر الآخرين وإدارتها بحكمة هو من صميم الأدب النبوي.',verse:'فَبِمَا رَحْمَةٍ مِنَ اللَّهِ لِنْتَ لَهُمْ وَلَوْ كُنْتَ فَظًّا غَلِيظَ الْقَلْبِ لَانْفَضُّوا مِنْ حَوْلِكَ',verseRef:'آل عمران ١٥٩',hadith:'ليس منا من لم يرحم صغيرنا ويعرف شرف كبيرنا — رواه الترمذي',action:'راقب مشاعرك اليوم: سمّها (غضب، فرح، قلق) ثم اختر ردة فعل حكيمة',young:'تعلم أن تعرف مشاعرك! هل أنت سعيد أم حزين أم خائف؟ معرفة مشاعرك قوة عظمى 🧠'},
    en:{title:'Emotional Intelligence',desc:'Al-Ghazali affirms: Islam preceded modern psychology in teaching emotional intelligence. The Prophet considered the feelings of every person and addressed them accordingly. Understanding your emotions and those of others, then managing them wisely, is at the heart of Prophetic manners.',verse:'It was by mercy from Allah that you were lenient with them. Had you been harsh and hard-hearted, they would have dispersed from around you',verseRef:'Al Imran 159',hadith:'He is not one of us who does not show mercy to our young and recognize the honor of our elders — Tirmidhi',action:'Monitor your emotions today: name them (anger, joy, worry) then choose a wise response',young:'Learn to know your feelings! Are you happy, sad, or scared? Knowing your feelings is a superpower 🧠'},
    fr:{title:"L'Intelligence Emotionnelle",desc:"L\'Islam a precede la psychologie moderne dans l'enseignement de l'intelligence emotionnelle. Le Prophete considerait les sentiments de chaque personne et s'adressait a chacun en consequence. Comprendre ses emotions et celles des autres, puis les gerer avec sagesse, est au coeur de l'ethique prophetique.",verse:'C\'est par une misericorde d\'Allah que tu as ete doux envers eux. Si tu avais ete rude et dur de coeur, ils se seraient disperses',verseRef:'Al Imran 159',hadith:"N'est pas des notres celui qui ne fait pas misericorde a nos petits et ne reconnait pas l'honneur de nos aines — Tirmidhi",action:"Surveillez vos emotions aujourd'hui : nommez-les (colere, joie, inquietude) puis choisissez une reponse sage",young:"Apprends a connaitre tes sentiments ! Es-tu heureux, triste ou effraye ? Connaitre tes sentiments est un super-pouvoir 🧠"}
  },
  {
    id:9, emoji:'🕊️',
    ar:{title:'الحياة العاطفية للنبي',desc:'النبي لم يكن جامداً بل كان أرقّ الناس قلباً. بكى على موت ابنه وضحك مع أصحابه وداعب الأطفال وسابق زوجته عائشة. كان يغضب للحق ويفرح للخير ويتأثر بجمال الطبيعة.',verse:'لَقَدْ جَاءَكُمْ رَسُولٌ مِنْ أَنْفُسِكُمْ عَزِيزٌ عَلَيْهِ مَا عَنِتُّمْ حَرِيصٌ عَلَيْكُمْ',verseRef:'التوبة ١٢٨',hadith:'كان النبي يضحك حتى تبدو نواجذه — رواه البخاري',action:'اقرأ اليوم موقفاً من السيرة النبوية يُظهر عاطفة النبي — وتأمل فيه',young:'النبي كان يلعب مع الأطفال ويضحك مع أصحابه! كان أحنّ واحد في العالم 🕊️'},
    en:{title:"The Prophet's Emotional Life",desc:'The Prophet was not stoic but the most tender-hearted of all people. He wept for the death of his son, laughed with his companions, played with children, and raced with his wife Aisha. He was angered by injustice, joyed by good, and moved by the beauty of nature.',verse:'There has come to you a Messenger from among yourselves. Grievous to him is what you suffer; he is concerned for you',verseRef:'At-Tawbah 128',hadith:'The Prophet would laugh until his molars could be seen — Bukhari',action:'Read a story from the Prophetic biography today that shows his emotional side — and reflect on it',young:'The Prophet used to play with children and laugh with his friends! He was the kindest person in the world 🕊️'},
    fr:{title:'La Vie Emotionnelle du Prophete',desc:"Le Prophete n'etait pas stoique mais le plus tendre des gens. Il a pleure la mort de son fils, ri avec ses compagnons, joue avec les enfants et fait la course avec son epouse Aicha. Il s'indignait de l'injustice, se rejouissait du bien et etait emu par la beaute de la nature.",verse:"Un Messager est venu a vous, de parmi vous-memes. Ce qui vous afflige lui est penible ; il est soucieux de vous",verseRef:'At-Tawbah 128',hadith:'Le Prophete riait au point que ses molaires apparaissaient — Bukhari',action:"Lisez aujourd'hui un recit de la biographie prophetique qui montre son cote emotionnel — et reflechissez-y",young:"Le Prophete jouait avec les enfants et riait avec ses amis ! Il etait la personne la plus gentille au monde 🕊️"}
  },
  {
    id:10, emoji:'💧',
    ar:{title:'دموع التقوى',desc:'البكاء من خشية الله علامة الإيمان الحي. عين تبكي من خشية الله لا تمسها النار. الدموع تطهر القلب وتغسل الذنوب وتقرّب العبد من ربه. ليس البكاء ضعفاً بل هو قوة الروح.',verse:'وَيَخِرُّونَ لِلْأَذْقَانِ يَبْكُونَ وَيَزِيدُهُمْ خُشُوعًا',verseRef:'الإسراء ١٠٩',hadith:'عينان لا تمسهما النار: عين بكت من خشية الله وعين باتت تحرس في سبيل الله — رواه الترمذي',action:'اقرأ القرآن الليلة بتدبر حتى يلين قلبك — وإن دمعت عيناك فقد ذقت حلاوة الإيمان',young:'عندما تقرأ القرآن وتشعر بشيء جميل في قلبك — هذا يعني أن قلبك حي ويحب الله 💧'},
    en:{title:'Tears of Piety',desc:'Weeping from the awe of God is a sign of living faith. An eye that weeps from reverence of God will not be touched by fire. Tears purify the heart, wash away sins, and draw the servant closer to the Lord. Weeping is not weakness but the strength of the spirit.',verse:'And they fall upon their faces weeping, and it increases them in humble submission',verseRef:'Al-Isra 109',hadith:'Two eyes will not be touched by the Fire: an eye that wept from the fear of God and an eye that stood guard in the way of God — Tirmidhi',action:'Read Quran tonight with deep reflection until your heart softens — if your eyes tear up, you have tasted the sweetness of faith',young:'When you read Quran and feel something beautiful in your heart — that means your heart is alive and loves Allah 💧'},
    fr:{title:'Les Larmes de Piete',desc:"Pleurer par crainte de Dieu est un signe de foi vivante. Un oeil qui pleure par reverence envers Dieu ne sera pas touche par le Feu. Les larmes purifient le coeur, lavent les peches et rapprochent le serviteur de son Seigneur. Pleurer n'est pas une faiblesse mais la force de l'ame.",verse:'Et ils tombent sur leurs faces en pleurant, et cela augmente leur humilite',verseRef:'Al-Isra 109',hadith:'Deux yeux ne seront pas touches par le Feu : un oeil qui a pleure par crainte de Dieu et un oeil qui a veille dans le sentier de Dieu — Tirmidhi',action:"Lisez le Coran ce soir avec reflexion profonde jusqu'a ce que votre coeur s'attendrisse",young:"Quand tu lis le Coran et que tu ressens quelque chose de beau dans ton coeur — cela signifie que ton coeur est vivant et aime Allah 💧"}
  },
  {
    id:11, emoji:'😄',
    ar:{title:'الضحك والمرح',desc:'الإسلام لا يحارب الضحك بل يوجهه. النبي كان يمزح ولا يقول إلا حقاً. المرح المعتدل يجدد النفس ويقوي الروابط بين الناس. لكن الإفراط في الضحك يميت القلب.',verse:'وَأَنَّهُ هُوَ أَضْحَكَ وَأَبْكَى',verseRef:'النجم ٤٣',hadith:'إني لأمزح ولا أقول إلا حقاً — رواه الترمذي',action:'امزح مع عائلتك اليوم مزحة لطيفة — لكن لا تجرح أحداً بكلامك',young:'المزاح اللطيف يسعد الناس! امزح مع عائلتك لكن لا تقل شيئاً يؤذي مشاعر أحد 😄'},
    en:{title:'Laughter and Playfulness',desc:'Islam does not fight laughter but guides it. The Prophet would joke but never said anything untrue. Moderate playfulness renews the soul and strengthens bonds between people. But excessive laughter deadens the heart.',verse:'And that it is He who makes one laugh and weep',verseRef:'An-Najm 43',hadith:'I joke, but I only speak the truth — Tirmidhi',action:'Share a kind joke with your family today — but never hurt anyone with your words',young:'Kind joking makes people happy! Joke with your family but never say anything that hurts feelings 😄'},
    fr:{title:'Le Rire et l\'Amusement',desc:"L\'Islam ne combat pas le rire mais le guide. Le Prophete plaisantait sans jamais dire de mensonge. L'amusement modere renouvelle l'ame et renforce les liens entre les gens. Mais l'exces de rire tue le coeur.",verse:'Et que c\'est Lui qui fait rire et fait pleurer',verseRef:'An-Najm 43',hadith:'Je plaisante mais je ne dis que la verite — Tirmidhi',action:"Partagez une plaisanterie gentille avec votre famille aujourd'hui — mais ne blessez jamais personne",young:"Les blagues gentilles rendent les gens heureux ! Plaisante avec ta famille mais ne dis jamais rien qui blesse 😄"}
  },
  {
    id:12, emoji:'🔥',
    ar:{title:'إدارة الغضب',desc:'الغضب طاقة عاطفية ليست شريرة بذاتها — يمكن أن تكون غيرة على الحق. لكن الغضب الأعمى يدمر صاحبه والآخرين. القوي ليس من يصرع الناس بل من يملك نفسه عند الغضب.',verse:'وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ',verseRef:'آل عمران ١٣٤',hadith:'ليس الشديد بالصُّرَعة إنما الشديد الذي يملك نفسه عند الغضب — متفق عليه',action:'عندما تغضب اليوم: توقف، تنفس بعمق ثلاث مرات، واذكر الله قبل أن تتكلم',young:'عندما تغضب: توقف! تنفس! عدّ حتى ١٠! ثم تحدث بهدوء — أنت بطل حقيقي 🔥'},
    en:{title:'Managing Anger',desc:'Anger is emotional energy that is not evil in itself — it can be righteous indignation for truth. But blind anger destroys its owner and others. The truly strong person is not the wrestler but the one who controls themselves in anger.',verse:'Those who restrain anger and pardon people',verseRef:'Al Imran 134',hadith:'The strong person is not the wrestler, but the one who controls themselves in anger — Agreed upon',action:'When you feel angry today: stop, take three deep breaths, and remember God before you speak',young:'When you get angry: Stop! Breathe! Count to 10! Then speak calmly — you are a real hero 🔥'},
    fr:{title:'La Gestion de la Colere',desc:"La colere est une energie emotionnelle qui n'est pas mauvaise en soi — elle peut etre une indignation juste pour la verite. Mais la colere aveugle detruit son proprietaire et les autres. Le vrai fort n'est pas le lutteur mais celui qui se maitrise dans la colere.",verse:'Ceux qui dominent leur colere et pardonnent aux gens',verseRef:'Al Imran 134',hadith:"Le fort n'est pas le lutteur, mais celui qui se maitrise dans la colere — Unanimement reconnu",action:"Quand vous etes en colere aujourd'hui : arretez-vous, respirez trois fois profondement, et rappelez-vous Dieu avant de parler",young:"Quand tu es en colere : Arrete ! Respire ! Compte jusqu'a 10 ! Puis parle calmement — tu es un vrai heros 🔥"}
  },
  {
    id:13, emoji:'🌻',
    ar:{title:'الشكر والامتنان',desc:'الشكر ليس مجرد كلمة بل عاطفة عميقة تملأ القلب بالسكينة. الشاكر يرى النعم في كل مكان والجاحد لا يرى إلا ما ينقصه. الشكر يزيد النعم ويطرد الهم.',verse:'لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ',verseRef:'إبراهيم ٧',hadith:'انظروا إلى من هو أسفل منكم ولا تنظروا إلى من هو فوقكم فهو أجدر ألا تزدروا نعمة الله — متفق عليه',action:'اكتب خمس نعم تشكر الله عليها الآن — وقل الحمد لله بكل قلبك',young:'قل الحمد لله! اكتب ثلاثة أشياء جميلة عندك — ستكتشف أنك غني بنعم الله 🌻'},
    en:{title:'Gratitude',desc:'Gratitude is not just a word but a deep emotion that fills the heart with serenity. The grateful person sees blessings everywhere while the ungrateful sees only what they lack. Gratitude multiplies blessings and dispels anxiety.',verse:'If you are grateful, I will surely increase you',verseRef:'Ibrahim 7',hadith:'Look at those below you and do not look at those above you, for that will prevent you from belittling the blessings of Allah — Agreed upon',action:'Write five blessings you are grateful for right now — and say Alhamdulillah from all your heart',young:'Say Alhamdulillah! Write three beautiful things you have — you will discover you are rich with blessings 🌻'},
    fr:{title:'La Gratitude',desc:"La gratitude n'est pas qu'un mot mais une emotion profonde qui remplit le coeur de serenite. Le reconnaissant voit les bienfaits partout tandis que l'ingrat ne voit que ce qui lui manque. La gratitude multiplie les bienfaits et chasse l'anxiete.",verse:'Si vous etes reconnaissants, Je vous augmenterai certainement',verseRef:'Ibrahim 7',hadith:"Regardez ceux qui sont en dessous de vous et non ceux qui sont au-dessus, c'est mieux pour ne pas mepriser les bienfaits d'Allah — Unanimement reconnu",action:"Ecrivez cinq bienfaits dont vous etes reconnaissants maintenant — et dites Alhamdulillah de tout coeur",young:"Dis Alhamdulillah ! Ecris trois belles choses que tu as — tu decouvriras que tu es riche en bienfaits 🌻"}
  },
  {
    id:14, emoji:'🌙',
    ar:{title:'الشوق إلى الله',desc:'الشوق إلى الله أعذب العواطف وأنقاها. هو شعور الروح التي تعرف أنها غريبة في هذا العالم وتتوق للعودة إلى ربها. العبادة بالشوق أعلى مراتب العبادة.',verse:'يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ ارْجِعِي إِلَى رَبِّكِ رَاضِيَةً مَرْضِيَّةً',verseRef:'الفجر ٢٧-٢٨',hadith:'من أحب لقاء الله أحب الله لقاءه — متفق عليه',action:'اجلس وحدك الليلة خمس دقائق في سكون وتأمل في عظمة الله — واشتق إلى لقائه',young:'الله ينتظرك دائماً! عندما تتحدث معه في الدعاء فأنت قريب منه جداً 🌙'},
    en:{title:'Longing for God',desc:'Longing for God is the sweetest and purest of all emotions. It is the feeling of a soul that knows it is a stranger in this world and yearns to return to its Lord. Worship driven by longing is the highest form of worship.',verse:'O tranquil soul, return to your Lord, pleased and pleasing',verseRef:'Al-Fajr 27-28',hadith:'Whoever loves to meet Allah, Allah loves to meet them — Agreed upon',action:'Sit alone tonight for five minutes in silence and contemplate the greatness of God — and yearn for His meeting',young:'Allah is always waiting for you! When you talk to Him in dua, you are very close to Him 🌙'},
    fr:{title:'La Nostalgie de Dieu',desc:"La nostalgie de Dieu est la plus douce et la plus pure de toutes les emotions. C'est le sentiment d'une ame qui sait qu'elle est etrangere dans ce monde et aspire a retourner a son Seigneur. L'adoration motivee par la nostalgie est la plus haute forme d'adoration.",verse:'O ame apaisee, retourne vers ton Seigneur, satisfaite et agreee',verseRef:'Al-Fajr 27-28',hadith:'Celui qui aime rencontrer Allah, Allah aime le rencontrer — Unanimement reconnu',action:"Asseyez-vous seul ce soir cinq minutes en silence et contemplez la grandeur de Dieu — et aspirez a Sa rencontre",young:"Allah t'attend toujours ! Quand tu Lui parles dans le dua, tu es tres proche de Lui 🌙"}
  },
  {
    id:15, emoji:'🌸',
    ar:{title:'الرفق واللين',desc:'الرفق زينة كل شيء والعنف شين كل شيء. الإسلام يدعو إلى اللين في التعامل والرفق بالضعيف والحنان على الصغير. القلب القاسي بعيد عن الله مهما كثرت عبادته.',verse:'فَبِمَا رَحْمَةٍ مِنَ اللَّهِ لِنْتَ لَهُمْ',verseRef:'آل عمران ١٥٩',hadith:'إن الله رفيق يحب الرفق ويعطي على الرفق ما لا يعطي على العنف — رواه مسلم',action:'عامل كل شخص تقابله اليوم بلطف — حتى من يزعجك — وانظر كيف يتغير الجو',young:'كن لطيفاً مع الجميع! الكلمة الطيبة واللمسة الحنونة تصنع المعجزات 🌸'},
    en:{title:'Gentleness and Tenderness',desc:'Gentleness adorns everything and violence disgraces everything. Islam calls for softness in dealing with others, tenderness toward the weak, and affection for the young. A hard heart is far from God no matter how much it worships.',verse:'It was by mercy from Allah that you were lenient with them',verseRef:'Al Imran 159',hadith:'Allah is Gentle and loves gentleness, and He gives for gentleness what He does not give for harshness — Muslim',action:'Treat everyone you meet today with kindness — even those who annoy you — and see how the atmosphere changes',young:'Be kind to everyone! A kind word and a gentle touch can work wonders 🌸'},
    fr:{title:'La Douceur et la Tendresse',desc:"La douceur embellit tout et la violence enlaidit tout. L'Islam appelle a la douceur dans les relations, la tendresse envers les faibles et l'affection pour les petits. Un coeur dur est loin de Dieu peu importe ses adorations.",verse:'C\'est par une misericorde d\'Allah que tu as ete doux envers eux',verseRef:'Al Imran 159',hadith:'Allah est Doux et aime la douceur, et Il donne pour la douceur ce qu\'Il ne donne pas pour la brutalite — Muslim',action:"Traitez chaque personne que vous rencontrez aujourd'hui avec gentillesse — meme ceux qui vous ennuient",young:"Sois gentil avec tout le monde ! Un mot gentil et un geste tendre peuvent faire des miracles 🌸"}
  }
];

// ═══════════════ QUIZ DATA (Who Wants to Be a Scholar?) ═══════════════
const QUIZ = [
  {
    ar:{q:'في أي آية أمر الله المؤمنين باتباع النبي كدليل على حبهم لله؟',opts:['آل عمران ٣١','البقرة ١٦٥','المائدة ٥٤','التوبة ٢٤'],correct:0,hint:'هذه الآية تسمى آية المحبة',quran:'آل عمران ٣١'},
    en:{q:'In which verse did Allah command believers to follow the Prophet as proof of their love for God?',opts:['Al Imran 31','Al-Baqarah 165','Al-Maidah 54','At-Tawbah 24'],correct:0,hint:'This verse is known as the Verse of Love',quran:'Al Imran 31'},
    fr:{q:'Dans quel verset Allah a-t-Il ordonne aux croyants de suivre le Prophete comme preuve de leur amour pour Dieu ?',opts:['Al Imran 31','Al-Baqarah 165','Al-Maidah 54','At-Tawbah 24'],correct:0,hint:'Ce verset est connu comme le Verset de l\'Amour',quran:'Al Imran 31'}
  },
  {
    ar:{q:'ماذا قال النبي عندما مات ابنه إبراهيم وهو يبكي؟',opts:['لا حول ولا قوة إلا بالله','إنا لله وإنا إليه راجعون','إن العين تدمع والقلب يحزن','استرجعوا يا أصحابي'],correct:2,hint:'هذا الحديث يجمع بين البكاء والرضا بقضاء الله',quran:'يوسف ٨٤'},
    en:{q:'What did the Prophet say when his son Ibrahim died, while he was weeping?',opts:['There is no power except with Allah','To Allah we belong and to Him we return','The eye sheds tears and the heart grieves','Be patient, my companions'],correct:2,hint:'This hadith combines weeping with acceptance of God\'s decree',quran:'Yusuf 84'},
    fr:{q:'Qu\'a dit le Prophete quand son fils Ibrahim est mort, alors qu\'il pleurait ?',opts:['Il n\'y a de force qu\'en Allah','Nous sommes a Allah et a Lui nous retournons','L\'oeil verse des larmes et le coeur s\'attriste','Soyez patients, mes compagnons'],correct:2,hint:'Ce hadith combine les pleurs avec l\'acceptation du decret divin',quran:'Yusuf 84'}
  },
  {
    ar:{q:'من الذي قال عنه القرآن إنه ابيضت عيناه من الحزن؟',opts:['النبي محمد','النبي أيوب','النبي يعقوب','النبي نوح'],correct:2,hint:'حزن على فقد ابنه الحبيب',quran:'يوسف ٨٤'},
    en:{q:'Whose eyes turned white from sadness according to the Quran?',opts:['Prophet Muhammad','Prophet Ayyub','Prophet Yaqub','Prophet Nuh'],correct:2,hint:'He grieved the loss of his beloved son',quran:'Yusuf 84'},
    fr:{q:'De qui le Coran dit que ses yeux ont blanchi de tristesse ?',opts:['Le Prophete Muhammad','Le Prophete Ayyub','Le Prophete Yaqub','Le Prophete Nuh'],correct:2,hint:'Il a pleure la perte de son fils bien-aime',quran:'Yusuf 84'}
  },
  {
    ar:{q:'أكمل الحديث: "ليس الشديد بالصُّرَعة إنما الشديد الذي يملك نفسه عند ..."',opts:['الحزن','الفرح','الغضب','الخوف'],correct:2,hint:'هذا الحديث يتعلق بإدارة عاطفة سلبية',quran:'آل عمران ١٣٤'},
    en:{q:'Complete the hadith: "The strong person is not the wrestler, but the one who controls themselves in ..."',opts:['Sadness','Joy','Anger','Fear'],correct:2,hint:'This hadith is about managing a negative emotion',quran:'Al Imran 134'},
    fr:{q:'Completez le hadith : « Le fort n\'est pas le lutteur, mais celui qui se maitrise dans la ... »',opts:['La tristesse','La joie','La colere','La peur'],correct:2,hint:'Ce hadith concerne la gestion d\'une emotion negative',quran:'Al Imran 134'}
  },
  {
    ar:{q:'ما هي العاطفة التي وصفها القرآن بقوله "فَبِذَلِكَ فَلْيَفْرَحُوا"؟',opts:['الرجاء','الحب','الفرح','الشوق'],correct:2,hint:'الله يأمر بهذه العاطفة عند تلقي النعم',quran:'يونس ٥٨'},
    en:{q:'Which emotion did the Quran describe by saying "in that let them rejoice"?',opts:['Hope','Love','Joy','Longing'],correct:2,hint:'God commands this emotion when receiving blessings',quran:'Yunus 58'},
    fr:{q:'Quelle emotion le Coran a-t-il decrite en disant « qu\'ils doivent se rejouir » ?',opts:['L\'espoir','L\'amour','La joie','La nostalgie'],correct:2,hint:'Dieu ordonne cette emotion a la reception des bienfaits',quran:'Yunus 58'}
  },
  {
    ar:{q:'أكمل الآية: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَى أَنْفُسِهِمْ لَا ..."',opts:['تحزنوا','تقنطوا من رحمة الله','تيأسوا','تخافوا'],correct:1,hint:'هذه الآية تتعلق بعاطفة الرجاء',quran:'الزمر ٥٣'},
    en:{q:'Complete the verse: "Say: O My servants who have transgressed, do not ..."',opts:['Grieve','Despair of the mercy of Allah','Lose hope','Be afraid'],correct:1,hint:'This verse is about the emotion of hope',quran:'Az-Zumar 53'},
    fr:{q:'Completez le verset : « Dis : O Mes serviteurs qui avez commis des exces, ne ... »',opts:['Soyez tristes','Desesperez pas de la misericorde d\'Allah','Perdez pas espoir','Ayez pas peur'],correct:1,hint:'Ce verset concerne l\'emotion de l\'espoir',quran:'Az-Zumar 53'}
  },
  {
    ar:{q:'ما الذي جُعل "قرة عين" النبي كما في الحديث؟',opts:['الصيام','الصلاة','قراءة القرآن','الصدقة'],correct:1,hint:'هذا الحديث يربط العبادة بعاطفة الحب',quran:'آل عمران ٣١'},
    en:{q:'What was made "the delight of the eyes" of the Prophet according to hadith?',opts:['Fasting','Prayer','Reading Quran','Charity'],correct:1,hint:'This hadith connects worship with the emotion of love',quran:'Al Imran 31'},
    fr:{q:'Qu\'est-ce qui a ete fait « la fraicheur des yeux » du Prophete selon le hadith ?',opts:['Le jeune','La priere','La lecture du Coran','La charite'],correct:1,hint:'Ce hadith relie l\'adoration a l\'emotion de l\'amour',quran:'Al Imran 31'}
  },
  {
    ar:{q:'ما صفة الله التي ذُكرت أكثر من غيرها في القرآن؟',opts:['القدرة','العلم','الرحمة','الحكمة'],correct:2,hint:'تُذكر في بداية كل سورة تقريباً',quran:'الأنبياء ١٠٧'},
    en:{q:'Which attribute of God is mentioned most frequently in the Quran?',opts:['Power','Knowledge','Mercy','Wisdom'],correct:2,hint:'It is mentioned at the beginning of nearly every surah',quran:'Al-Anbiya 107'},
    fr:{q:'Quel attribut de Dieu est mentionne le plus souvent dans le Coran ?',opts:['La Puissance','La Science','La Misericorde','La Sagesse'],correct:2,hint:'Il est mentionne au debut de presque chaque sourate',quran:'Al-Anbiya 107'}
  },
  {
    ar:{q:'ما العاطفة التي قال عنها الحديث: "عينان لا تمسهما النار"؟',opts:['الحب','الفرح','البكاء من خشية الله','الشوق'],correct:2,hint:'هذه عاطفة تتعلق بدموع خاصة',quran:'الإسراء ١٠٩'},
    en:{q:'Which emotion is described in the hadith: "Two eyes will not be touched by the Fire"?',opts:['Love','Joy','Weeping from awe of God','Longing'],correct:2,hint:'This emotion involves special tears',quran:'Al-Isra 109'},
    fr:{q:'Quelle emotion est decrite dans le hadith : « Deux yeux ne seront pas touches par le Feu » ?',opts:['L\'amour','La joie','Les pleurs par crainte de Dieu','La nostalgie'],correct:2,hint:'Cette emotion implique des larmes speciales',quran:'Al-Isra 109'}
  },
  {
    ar:{q:'أكمل الحديث: "إن الله رفيق يحب ..."',opts:['الصبر','القوة','الرفق','العلم'],correct:2,hint:'هذه صفة تتعلق باللين والحنان',quran:'آل عمران ١٥٩'},
    en:{q:'Complete the hadith: "Allah is Gentle and loves ..."',opts:['Patience','Strength','Gentleness','Knowledge'],correct:2,hint:'This quality is about softness and tenderness',quran:'Al Imran 159'},
    fr:{q:'Completez le hadith : « Allah est Doux et aime ... »',opts:['La patience','La force','La douceur','La science'],correct:2,hint:'Cette qualite concerne la tendresse et la bienveillance',quran:'Al Imran 159'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء تثبيت القلب',text:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'رواه الترمذي'},
    en:{label:'Dua for Steadfast Heart',text:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'O Turner of hearts, make my heart firm upon Your religion — Tirmidhi'},
    fr:{label:'Dua pour un Coeur Ferme',text:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'O Celui qui retourne les coeurs, affermis mon coeur sur Ta religion — Tirmidhi'} },
  { ar:{label:'دعاء انشراح الصدر',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',tr:'طه ٢٥-٢٦'},
    en:{label:'Dua for an Open Heart',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',tr:'My Lord, expand for me my chest and ease for me my task — Taha 25-26'},
    fr:{label:'Dua pour un Coeur Ouvert',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',tr:'Mon Seigneur, ouvre-moi ma poitrine et facilite-moi ma tache — Taha 25-26'} },
  { ar:{label:'دعاء ذهاب الهم',text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ',tr:'رواه البخاري'},
    en:{label:'Dua against Anxiety',text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ',tr:'O Allah, I seek refuge in You from worry, grief, inability, and laziness — Bukhari'},
    fr:{label:'Dua contre l\'Anxiete',text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ',tr:'O Allah, je cherche refuge aupres de Toi contre le souci, le chagrin, l\'incapacite et la paresse — Bukhari'} },
  { ar:{label:'دعاء حب الله',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ حُبَّكَ وَحُبَّ مَنْ يُحِبُّكَ وَحُبَّ عَمَلٍ يُقَرِّبُنِي إِلَى حُبِّكَ',tr:'رواه الترمذي'},
    en:{label:'Dua for the Love of Allah',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ حُبَّكَ وَحُبَّ مَنْ يُحِبُّكَ وَحُبَّ عَمَلٍ يُقَرِّبُنِي إِلَى حُبِّكَ',tr:'O Allah, I ask You for Your love, the love of those who love You, and the love of deeds that bring me closer to Your love — Tirmidhi'},
    fr:{label:'Dua pour l\'Amour d\'Allah',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ حُبَّكَ وَحُبَّ مَنْ يُحِبُّكَ وَحُبَّ عَمَلٍ يُقَرِّبُنِي إِلَى حُبِّكَ',tr:'O Allah, je Te demande Ton amour, l\'amour de ceux qui T\'aiment, et l\'amour des actes qui me rapprochent de Ton amour — Tirmidhi'} },
  { ar:{label:'دعاء الشكر',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'النمل ١٩'},
    en:{label:'Dua of Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'My Lord, enable me to be grateful for Your favor which You have bestowed upon me — An-Naml 19'},
    fr:{label:'Dua de Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'Mon Seigneur, permets-moi de Te remercier pour Tes bienfaits — An-Naml 19'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'atifi-xp';
const BADGES_KEY = 'atifi-badges';
const READ_KEY = 'atifi-read';
const STREAK_KEY = 'atifi-streak';
const MODE_KEY = 'atifi-mode';
const QUIZ_BEST_KEY = 'atifi-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Debutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Perseverant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) {
  const xp = getXP() + pts;
  localStorage.setItem(XP_KEY, xp);
  checkBadges(xp);
  updateXPDisplay();
  return xp;
}
function getLevel(xp) {
  if (xp >= 1000) return 5;
  if (xp >= 500) return 4;
  if (xp >= 300) return 3;
  if (xp >= 100) return 2;
  return 1;
}
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) {
  const earned = getEarnedBadges();
  BADGE_DEFS.forEach(b => {
    if (xp >= b.xp && !earned.includes(b.id)) {
      earned.push(b.id);
      localStorage.setItem(BADGES_KEY, JSON.stringify(earned));
      showToast(`${b.emoji} ${b[lang]}!`);
      playSound('success');
    }
  });
}
function getReadTraits() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markTraitRead(id) {
  const read = getReadTraits();
  if (!read.includes(id)) {
    read.push(id);
    localStorage.setItem(READ_KEY, JSON.stringify(read));
    addXP(10);
  }
}

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() {
  const today = new Date().toDateString();
  const s = getStreak();
  if (s.lastDate === today) return s.count;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; }
  s.lastDate = today;
  localStorage.setItem(STREAK_KEY, JSON.stringify(s));
  return s.count;
}

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() {
  ageMode = ageMode === 'young' ? 'teen' : 'young';
  localStorage.setItem(MODE_KEY, ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  renderAll();
  showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode);
  playSound('theme');
}

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentPrincipleIdx = -1;

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  renderAll();
}

function cycleTheme() {
  const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length;
  currentTheme = THEMES[idx];
  document.documentElement.dataset.theme = currentTheme;
  { const _e=document.getElementById('themeIcon'); if(_e) _e.textContent=THEME_ICONS[currentTheme]; }
  playSound('theme');
}

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  { const _e=document.getElementById('appTitle'); if(_e) _e.textContent=t.appTitle; }
  { const _e=document.getElementById('splashSub'); if(_e) _e.textContent=t.splashSub; }
  { const _e=document.getElementById('splashHint'); if(_e) _e.textContent=t.splashHint; }
  { const _e=document.getElementById('tabHome'); if(_e) _e.textContent=t.tabHome; }
  { const _e=document.getElementById('tabTraits'); if(_e) _e.textContent=t.tabTraits; }
  { const _e=document.getElementById('tabQuiz'); if(_e) _e.textContent=t.tabQuiz; }
  { const _e=document.getElementById('tabProgress'); if(_e) _e.textContent=t.tabProgress; }
  { const _e=document.getElementById('tabAbout'); if(_e) _e.textContent=t.tabAbout; }
  { const _e=(document.getElementById('traitsTitle') || document.getElementById('cardsTitle')); if(_e) _e.textContent=t.traitsTitle; }
  { const _e=(document.getElementById('traitsDesc') || document.getElementById('cardsDesc')); if(_e) _e.textContent=t.traitsDesc; }
  { const _e=document.getElementById('quizTitle'); if(_e) _e.textContent=t.quizTitle; }
  { const _e=document.getElementById('quizDesc'); if(_e) _e.textContent=t.quizDesc; }
  { const _e=document.getElementById('progressTitle'); if(_e) _e.textContent=t.progressTitle; }
  { const _e=document.getElementById('progressDesc'); if(_e) _e.textContent=t.progressDesc; }
  { const _e=document.getElementById('helpTitle'); if(_e) _e.textContent=t.helpTitle; }
  { const _e=document.getElementById('duaPanelTitle'); if(_e) _e.textContent=t.duaPanelTitle; }
  { const _e=document.getElementById('ageModeBtn'); if(_e) _e.textContent=ageMode === 'young' ? t.youngMode : t.teenMode; }
  // Render sections
  renderHome();
  renderTraits();
  renderProgress();
  renderAbout();
  renderHelp();
  renderDuas();
  renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % TRAITS.length;
  const trait = TRAITS[dayIdx];
  const d = trait[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${trait.emoji} ${d.title}</div>
    <div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div>
    <div class="daily-action" onclick="switchTab('traits');toggleCard('trait-${trait.id}')">${t.readMore} &#8594;</div>`;
  // Grid
  (document.getElementById('homeGrid')||{}).innerHTML= TRAITS.map(tr => {
    const dd = tr[lang];
    return `<div class="home-card" onclick="switchTab('traits');toggleCard('trait-${tr.id}')">
      <span class="hc-icon">${tr.emoji}</span>
      <div class="hc-title">${dd.title}</div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: TRAITS ═══════════════
function renderTraits() {
  const t = T[lang];
  const readTraits = getReadTraits();
  const container = (document.getElementById('traitsContainer') || document.getElementById('cardsContainer'));
  // Search bar
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="traitsSearch" placeholder="${t.searchPlaceholder}" oninput="filterTraits(this.value)"></div>`;
  container.innerHTML = searchHTML + TRAITS.map(tr => {
    const d = tr[lang];
    const isRead = readTraits.includes(tr.id);
    return `
    <div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="trait-${tr.id}">
      <div class="trait-head" onclick="toggleCard('trait-${tr.id}');markTraitRead(${tr.id})">
        <span class="trait-num">${tr.id}</span>
        <span class="trait-emoji">${tr.emoji}</span>
        <span class="trait-title">${d.title}</span>
        ${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}
        <span class="trait-chev">&#9660;</span>
      </div>
      <div class="trait-body">
        <div class="trait-inner">
          <div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="hadith-box">
            <span class="hadith-label">📜 ${t.hadith}</span>
            <div class="hadith-text">${d.hadith}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="shareTrait(${tr.id})"><span class="share-icon">📤</span> ${t.share}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterTraits(query) {
  const cards = document.querySelectorAll('.trait-card');
  const q = query.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.trait-title').textContent.toLowerCase();
    const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : '';
    card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none';
  });
}

function shareTrait(id) {
  const trait = TRAITS.find(t => t.id === id);
  if (!trait) return;
  const d = trait[lang];
  const text = `${trait.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`;
  if (navigator.share) { navigator.share({ title: d.title, text }); }
  else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); }
}

// ═══════════════ RENDER: QUIZ (Who Wants to Be a Scholar?) ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };

function renderQuiz() {
  quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true };
  showQuizQuestion();
}

function showQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  if (!container) return;
  const result = document.getElementById('quizResult');
  result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) {
    showQuizResult();
    return;
  }
  const q = QUIZ[quizState.current][lang];
  const total = QUIZ.length;
  const num = quizState.current + 1;
  container.innerHTML = `
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div>
    <div class="quiz-counter">${num} / ${total}</div>
    <div class="quiz-question-card scroll-reveal">
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options" id="quizOpts">
        ${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
      </div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
        <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
        <button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button>
      </div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div>
    </div>`;
}

function answerQuiz(idx) {
  if (!quizState.active) return;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === correct) o.classList.add('correct');
    if (i === idx && i !== correct) o.classList.add('wrong');
  });
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  if (idx === correct) {
    quizState.score++;
    addXP(5);
    feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`;
    playSound('success');
  } else {
    feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`;
    playSound('click');
  }
  quizState.answers.push(idx);
  quizState.current++;
  setTimeout(() => showQuizQuestion(), 1800);
}

function useFiftyFifty() {
  if (!quizState.lifelines.fifty) return;
  quizState.lifelines.fifty = false;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const wrongIdxs = [0,1,2,3].filter(i => i !== correct);
  const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }});
  document.querySelector('.lifeline-btn').classList.add('used');
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint) return;
  quizState.lifelines.hint = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`;
  playSound('click');
}

function useQuranRef() {
  if (!quizState.lifelines.quran) return;
  quizState.lifelines.quran = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`;
  playSound('click');
}

function showQuizResult() {
  const t = T[lang];
  const total = QUIZ.length;
  const pct = Math.round(quizState.score / total * 100);
  // Save best score
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct);
  addXP(20); // bonus for completing
  let emoji, title;
  if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A True Scholar!'; }
  else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Tres bien !':'Very Good!'; }
  else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; }
  (document.getElementById('quizContainer')||{}).innerHTML= '';
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${total}</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${pct}%</div>
    <button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  if (pct >= 80) launchConfetti();
  quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang];
  const xp = getXP();
  const level = getLevel(xp);
  const streak = getStreak().count;
  const readTraits = getReadTraits();
  const earned = getEarnedBadges();
  const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id));
  const nextXP = nextBadge ? nextBadge.xp : 1000;
  const progressPct = Math.min(100, (xp / nextXP) * 100);

  (document.getElementById('progressContainer')||{}).innerHTML= `
    <div class="progress-xp-card">
      <div class="xp-header">
        <span class="xp-icon">⭐</span>
        <span class="xp-amount">${xp} ${t.xpLabel}</span>
      </div>
      <div class="xp-bar-wrap">
        <div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div>
        <span class="xp-level">${t.levelLabel} ${level}</span>
      </div>
      ${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}
    </div>
    ${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}
    <div class="progress-stats">
      <div class="stat-card"><span class="stat-num">${readTraits.length}</span><span class="stat-label">${lang==='ar'?'عاطفة مقروءة':lang==='fr'?'Emotions lues':'Emotions Read'}</span><span class="stat-total">/ ${TRAITS.length}</span></div>
      <div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div>
      <div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div>
    </div>
    <div class="badges-section">
      <h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3>
      <div class="badges-grid">
        ${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}
      </div>
    </div>`;
}

function updateXPDisplay() {
  // Quick update if progress panel is visible
  const panel = document.getElementById('panel-progress');
  if (panel && panel.classList.contains('active')) renderProgress();
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل. عُرف بالتجديد ومحاربة الجمود والتشدد.',
      bookTitle: 'عن الكتاب',
      bookDesc: '«الجانب العاطفي من الإسلام» كتاب يكشف عن وجه الإسلام الحاني الرقيق. يبيّن الشيخ الغزالي أن الإسلام ليس ديناً جافاً يخاطب العقل فقط، بل هو دين يحتضن القلب ويوجه المشاعر ويرتقي بالعواطف. يتناول الحب والرحمة والفرح والحزن والخشية والأمل في ميزان الشريعة.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "الجانب العاطفي من الإسلام" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي والنسائي'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner. Known for renewal, fighting rigidity, and defending women\'s rights in Islam.',
      bookTitle: 'About the Book',
      bookDesc: '"The Emotional Side of Islam" reveals the tender, compassionate face of Islam. Sheikh al-Ghazali shows that Islam is not a dry religion addressing only the mind, but one that embraces the heart, guides emotions, and elevates feelings. The book explores love, mercy, joy, grief, awe, and hope through the lens of Islamic teachings.',
      sourcesTitle: 'Sources',
      sources: ['"The Emotional Side of Islam" (Al-Janib al-Atifi) — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan at-Tirmidhi and An-Nasai'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '"Le Cote Emotionnel de l\'Islam" revele le visage tendre et compatissant de l\'Islam. Le Sheikh al-Ghazali montre que l\'Islam n\'est pas une religion seche s\'adressant uniquement a l\'esprit, mais qu\'il embrasse le coeur, guide les emotions et eleve les sentiments. Le livre explore l\'amour, la misericorde, la joie, le chagrin, la crainte et l\'espoir a travers les enseignements islamiques.',
      sourcesTitle: 'Sources',
      sources: ['"Le Cote Emotionnel de l\'Islam" (Al-Janib al-Atifi) — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan at-Tirmidhi et An-Nasai'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي عن عواطف المؤمن بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "الجانب العاطفي من الإسلام" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ١٥ عاطفة، مسابقة تفاعلية، نظام نقاط وشارات، وضعان للأعمار.'},
      {title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي، خط أكبر.'},
      {title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/al-janib-al-atifi'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom on the believer\'s emotions interactively.'},
      {title:'📚 Sources',body:'"The Emotional Side of Islam" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 15 emotions, interactive quiz, XP and badges system, 2 age modes.'},
      {title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis, larger font.'},
      {title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/al-janib-al-atifi'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali sur les emotions du croyant.'},
      {title:'📚 Sources',body:'"Le Cote Emotionnel de l\'Islam" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 15 emotions, quiz interactif, systeme XP et badges, 2 modes d\'age.'},
      {title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis, police plus grande.'},
      {title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/al-janib-al-atifi'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = {
    ar: ['📖 اقرأ عاطفة جديدة كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء بانشراح الصدر','⭐ أكمل ١٥ عاطفة لتصبح خبيراً'],
    en: ['📖 Read a new emotion every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget to make dua for an open heart','⭐ Complete all 15 emotions to become an Expert'],
    fr: ['📖 Lisez une nouvelle emotion chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas pour un coeur ouvert','⭐ Completez les 15 emotions pour devenir Expert']
  };
  const items = tips[lang];
  const doubled = [...items, ...items];
  const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() {
  const features = document.getElementById('splashFeatures');
  if (features) {
    features.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`
    ).join('');
  }
  let count = 5;
  const counter = document.getElementById('splashCount');
  splashTimer = setInterval(() => {
    count--;
    if (counter) counter.textContent = count;
    if (count <= 0) dismissSplash();
  }, 1000);
}
function dismissSplash() {
  clearInterval(splashTimer);
  const splash = document.getElementById('splash');
  if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); }
}

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const name = tab.dataset.tab;
      switchTab(name);
    });
  });
}
function switchTab(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`);
  if (panel) panel.classList.add('active');
  if (tabBtn) tabBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  playSound('click');
  // Re-init scroll reveal
  setTimeout(() => {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
      if (window._scrollObserver) window._scrollObserver.observe(el);
    });
    initTypewriter();
  }, 100);
  // Auto-render quiz when switching to quiz tab
  if (name === 'quiz' && document.getElementById('quizContainer') && !document.getElementById('quizContainer').innerHTML.trim()) {
    renderQuiz();
  }
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        window._scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel');
      if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel');
      if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-traits');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'traitsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentPrincipleIdx >= 0 && currentPrincipleIdx < cards.length) cards[currentPrincipleIdx].classList.remove('open');
      const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1);
      currentPrincipleIdx = Math.max(0, Math.min(cards.length-1, currentPrincipleIdx+dir));
      cards[currentPrincipleIdx].classList.add('open');
      cards[currentPrincipleIdx].scrollIntoView({ behavior:'smooth', block:'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; }
    else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; }
    else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#E91E63','#FF5722','#FF9800','#FFC107','#9C27B0','#3F51B5','#00BCD4'];
  for (let i = 0; i < 120; i++) {
    particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() {
    if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); }
    else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); }
  }
  setTimeout(typeChar, 500);
}

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home','traits','quiz','progress','about'];
  document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return;
    const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); });
    if (current < 0) return;
    const isRTL = document.documentElement.dir === 'rtl';
    let next;
    if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1;
    if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]);
  }, { passive: true });
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  // Set age mode class
  document.body.classList.toggle('young-mode', ageMode === 'young');
  // Update streak
  updateStreak();
  // Init
  initSplash();
  renderAll();
  initTabs();
  initScrollReveal();
  initScrollTop();
  initKeyboardNav();
  initSwipeGestures();
  initTypewriter();
});
