// app.js - Core logic for Chinese-Korean learning app

// Global state
let words = [
    // Lesson 0: Basic Greetings
    { "lesson": 0, "korean": "안녕", "chinese": "你好", "pinyin": "nǐ hǎo" },
    { "lesson": 0, "korean": "감사합니다", "chinese": "谢谢", "pinyin": "xièxie" },
    { "lesson": 0, "korean": "미안합니다", "chinese": "对不起", "pinyin": "duìbuqǐ" },
    { "lesson": 0, "korean": "괜찮습니다", "chinese": "没关系", "pinyin": "méi guānxi" },
    { "lesson": 0, "korean": "안녕히 가세요", "chinese": "再见", "pinyin": "zàijiàn" },

    // Lesson 1: Basic Pronouns & Greetings
    { "lesson": 1, "korean": "[대] 너, 당신", "chinese": "你", "pinyin": "nǐ" },
    { "lesson": 1, "korean": "[형] 좋다, 안녕하다", "chinese": "好", "pinyin": "hǎo" },
    { "lesson": 1, "korean": "[대] 여러분", "chinese": "大家", "pinyin": "dàjiā" },
    { "lesson": 1, "korean": "당신[너의 존칭어]", "chinese": "您", "pinyin": "nín" },
    { "lesson": 1, "korean": "[동] 다시 만나요, 안녕(헤어질 때 하는 인사)", "chinese": "再见", "pinyin": "zàijiàn" },
    { "lesson": 1, "korean": "너희들, 당신들", "chinese": "你们", "pinyin": "nǐmen" },
    { "lesson": 1, "korean": "엄마", "chinese": "妈妈", "pinyin": "māma" },
    { "lesson": 1, "korean": "아빠", "chinese": "爸爸", "pinyin": "bàba" },
    { "lesson": 1, "korean": "누나, 언니", "chinese": "姐姐", "pinyin": "jiějie" },
    { "lesson": 1, "korean": "형, 오빠", "chinese": "哥哥", "pinyin": "gēge" },
    { "lesson": 1, "korean": "고마워요", "chinese": "谢谢", "pinyin": "xièxie" },
    { "lesson": 1, "korean": "천만에요", "chinese": "不客气", "pinyin": "bú kèqi" },
    { "lesson": 1, "korean": "미안해요", "chinese": "对不起", "pinyin": "duìbuqǐ" },
    { "lesson": 1, "korean": "괜찮아요", "chinese": "没关系", "pinyin": "méi guānxi" },

    // Lesson 2: Adjectives & Descriptions
    { "lesson": 2, "korean": "(일이) 바쁘다", "chinese": "忙", "pinyin": "máng" },
    { "lesson": 2, "korean": "피곤하다", "chinese": "累", "pinyin": "lèi" },
    { "lesson": 2, "korean": "(키가) 크다", "chinese": "高", "pinyin": "gāo" },
    { "lesson": 2, "korean": "(키가) 작다", "chinese": "矮", "pinyin": "ǎi" },
    { "lesson": 2, "korean": "목마르다", "chinese": "渴", "pinyin": "kě" },
    { "lesson": 2, "korean": "배고프다", "chinese": "饿", "pinyin": "è" },
    { "lesson": 2, "korean": "매우, 아주", "chinese": "很", "pinyin": "hěn" },
    { "lesson": 2, "korean": "~아니다(부정부사)", "chinese": "不", "pinyin": "bù" },
    { "lesson": 2, "korean": "1, 하나", "chinese": "一", "pinyin": "yī" },
    { "lesson": 2, "korean": "2, 둘", "chinese": "二", "pinyin": "èr" },
    { "lesson": 2, "korean": "3, 셋", "chinese": "三", "pinyin": "sān" },
    { "lesson": 2, "korean": "4, 넷", "chinese": "四", "pinyin": "sì" },
    { "lesson": 2, "korean": "5, 다섯", "chinese": "五", "pinyin": "wǔ" },
    { "lesson": 2, "korean": "6, 여섯", "chinese": "六", "pinyin": "liù" },
    { "lesson": 2, "korean": "7, 일곱", "chinese": "七", "pinyin": "qī" },
    { "lesson": 2, "korean": "8, 여덟", "chinese": "八", "pinyin": "bā" },
    { "lesson": 2, "korean": "9, 아홉", "chinese": "九", "pinyin": "jiǔ" },
    { "lesson": 2, "korean": "10, 열", "chinese": "十", "pinyin": "shí" },

    // Lesson 3: Activities & Animals
    { "lesson": 3, "korean": "보다", "chinese": "看", "pinyin": "kàn" },
    { "lesson": 3, "korean": "~도, 또한", "chinese": "也", "pinyin": "yě" },
    { "lesson": 3, "korean": "그", "chinese": "他", "pinyin": "tā" },
    { "lesson": 3, "korean": "그녀", "chinese": "她", "pinyin": "tā" },
    { "lesson": 3, "korean": "듣다", "chinese": "听", "pinyin": "tīng" },
    { "lesson": 3, "korean": "오다", "chinese": "来", "pinyin": "lái" },
    { "lesson": 3, "korean": "주다", "chinese": "给", "pinyin": "gěi" },
    { "lesson": 3, "korean": "마시다", "chinese": "喝", "pinyin": "hē" },
    { "lesson": 3, "korean": "사다", "chinese": "买", "pinyin": "mǎi" },
    { "lesson": 3, "korean": "사자", "chinese": "狮子", "pinyin": "shīzi" },
    { "lesson": 3, "korean": "판다", "chinese": "熊猫", "pinyin": "xióngmāo" },
    { "lesson": 3, "korean": "코끼리", "chinese": "大象", "pinyin": "dàxiàng" },
    { "lesson": 3, "korean": "돼지", "chinese": "猪", "pinyin": "zhū" },
    { "lesson": 3, "korean": "강아지", "chinese": "小狗", "pinyin": "xiǎogǒu" },
    { "lesson": 3, "korean": "고양이", "chinese": "猫", "pinyin": "māo" },
    { "lesson": 3, "korean": "할머니", "chinese": "奶奶", "pinyin": "nǎinai" },
    { "lesson": 3, "korean": "할아버지", "chinese": "爷爷", "pinyin": "yéye" },

    // Lesson 4: Identifications & Nationalities
    { "lesson": 4, "korean": "~이다", "chinese": "是", "pinyin": "shì" },
    { "lesson": 4, "korean": "학생", "chinese": "学生", "pinyin": "xuésheng" },
    { "lesson": 4, "korean": "선생님", "chinese": "老师", "pinyin": "lǎoshī" },
    { "lesson": 4, "korean": "그들", "chinese": "他们", "pinyin": "tāmen" },
    { "lesson": 4, "korean": "모두", "chinese": "都", "pinyin": "dōu" },
    { "lesson": 4, "korean": "회사원", "chinese": "公司职员", "pinyin": "gōngsī zhíyuán" },
    { "lesson": 4, "korean": "한국인", "chinese": "韩国人", "pinyin": "Hánguórén" },
    { "lesson": 4, "korean": "중국인", "chinese": "中国人", "pinyin": "Zhōngguórén" },
    { "lesson": 4, "korean": "미국인", "chinese": "美国人", "pinyin": "Měiguórén" },

    // Lesson 5: Food & Drinks Expanded
    { "lesson": 5, "korean": "우리들", "chinese": "我们", "pinyin": "wǒmen" },
    { "lesson": 5, "korean": "먹다", "chinese": "吃", "pinyin": "chī" },
    { "lesson": 5, "korean": "피자", "chinese": "比萨", "pinyin": "bǐsà" },
    { "lesson": 5, "korean": "커피", "chinese": "咖啡", "pinyin": "kāfēi" },
    { "lesson": 5, "korean": "콜라", "chinese": "可乐", "pinyin": "kělè" },
    { "lesson": 5, "korean": "빵", "chinese": "面包", "pinyin": "miànbāo" },
    { "lesson": 5, "korean": "바나나", "chinese": "香蕉", "pinyin": "xiāngjiāo" },
    { "lesson": 5, "korean": "햄버거", "chinese": "汉堡包", "pinyin": "hànbǎobāo" },
    { "lesson": 5, "korean": "우유", "chinese": "牛奶", "pinyin": "niúnǎi" },
    { "lesson": 5, "korean": "맥주", "chinese": "啤酒", "pinyin": "píjiǔ" },
    { "lesson": 5, "korean": "샤오롱바오", "chinese": "小笼包", "pinyin": "xiǎolóngbāo" },
    { "lesson": 5, "korean": "샌드위치", "chinese": "三明治", "pinyin": "sānmíngzhì" },
    { "lesson": 5, "korean": "아이스크림", "chinese": "冰淇淋", "pinyin": "bīngqílín" },
    { "lesson": 5, "korean": "치킨", "chinese": "炸鸡", "pinyin": "zhájī" },
    { "lesson": 5, "korean": "차", "chinese": "茶", "pinyin": "chá" },
    { "lesson": 5, "korean": "밀크티", "chinese": "奶茶", "pinyin": "nǎichá" },
    { "lesson": 5, "korean": "과일 주스", "chinese": "果汁", "pinyin": "guǒzhī" },
    { "lesson": 5, "korean": "물", "chinese": "水", "pinyin": "shuǐ" },

    // Lesson 6: Demonstratives & Everyday Objects/Fruits
    { "lesson": 6, "korean": "이, 이것", "chinese": "这", "pinyin": "zhè" },
    { "lesson": 6, "korean": "그, 그것, 저, 저것", "chinese": "那", "pinyin": "nà" },
    { "lesson": 6, "korean": "무엇", "chinese": "什么", "pinyin": "shénme" },
    { "lesson": 6, "korean": "책", "chinese": "书", "pinyin": "shū" },
    { "lesson": 6, "korean": "노트", "chinese": "本子", "pinyin": "běnzi" },
    { "lesson": 6, "korean": "컵, 잔", "chinese": "杯子", "pinyin": "bēizi" },
    { "lesson": 6, "korean": "젓가락", "chinese": "筷子", "pinyin": "kuàizi" },
    { "lesson": 6, "korean": "과일", "chinese": "水果", "pinyin": "shuǐguǒ" },
    { "lesson": 6, "korean": "인형", "chinese": "娃娃", "pinyin": "wáwa" },
    { "lesson": 6, "korean": "양말", "chinese": "袜子", "pinyin": "wàzi" },
    { "lesson": 6, "korean": "옷", "chinese": "衣服", "pinyin": "yīfu" },
    { "lesson": 6, "korean": "책가방", "chinese": "书包", "pinyin": "shūbāo" },
    { "lesson": 6, "korean": "수박", "chinese": "西瓜", "pinyin": "xīguā" },
    { "lesson": 6, "korean": "귤", "chinese": "橘子", "pinyin": "júzi" },
    { "lesson": 6, "korean": "복숭아", "chinese": "桃子", "pinyin": "táozi" },
    { "lesson": 6, "korean": "파인애플", "chinese": "菠萝", "pinyin": "bōluó" },
    { "lesson": 6, "korean": "사과", "chinese": "苹果", "pinyin": "píngguǒ" },
    { "lesson": 6, "korean": "포도", "chinese": "葡萄", "pinyin": "pútao" },
    { "lesson": 6, "korean": "딸기", "chinese": "草莓", "pinyin": "cǎoméi" },
    { "lesson": 6, "korean": "배", "chinese": "梨", "pinyin": "lí" },
    { "lesson": 6, "korean": "망고", "chinese": "芒果", "pinyin": "mángguǒ" },

    // Lesson 7: Places & Directions
    { "lesson": 7, "korean": "가다", "chinese": "去", "pinyin": "qù" },
    { "lesson": 7, "korean": "~에 있다", "chinese": "在", "pinyin": "zài" },
    { "lesson": 7, "korean": "어디, 어느 곳", "chinese": "哪儿", "pinyin": "nǎr" },
    { "lesson": 7, "korean": "학교", "chinese": "学校", "pinyin": "xuéxiào" },
    { "lesson": 7, "korean": "회사", "chinese": "公司", "pinyin": "gōngsī" },
    { "lesson": 7, "korean": "도서관", "chinese": "图书馆", "pinyin": "túshūguǎn" },
    { "lesson": 7, "korean": "은행", "chinese": "银行", "pinyin": "yínháng" },
    { "lesson": 7, "korean": "병원", "chinese": "医院", "pinyin": "yīyuàn" },
    { "lesson": 7, "korean": "마트, 슈퍼마켓", "chinese": "超市", "pinyin": "chāoshì" },
    { "lesson": 7, "korean": "음식점, 식당", "chinese": "饭馆儿", "pinyin": "fànguǎnr" },

    // Lesson 8: Possessions & Room Items
    { "lesson": 8, "korean": "있다, 가지고 있다", "chinese": "有", "pinyin": "yǒu" },
    { "lesson": 8, "korean": "없다", "chinese": "没有", "pinyin": "méiyǒu" },
    { "lesson": 8, "korean": "여자 친구", "chinese": "女朋友", "pinyin": "nǚpéngyou" },
    { "lesson": 8, "korean": "남자 친구", "chinese": "男朋友", "pinyin": "nánpéngyou" },
    { "lesson": 8, "korean": "침대", "chinese": "床", "pinyin": "chuáng" },
    { "lesson": 8, "korean": "탁자, 테이블", "chinese": "桌子", "pinyin": "zhuōzi" },
    { "lesson": 8, "korean": "의자", "chinese": "椅子", "pinyin": "yǐzi" },
    { "lesson": 8, "korean": "텔레비전, TV", "chinese": "电视", "pinyin": "diànshì" },
    { "lesson": 8, "korean": "컴퓨터", "chinese": "电脑", "pinyin": "diànnǎo" },
    { "lesson": 8, "korean": "에어컨", "chinese": "空调", "pinyin": "kōngtiáo" },
    { "lesson": 8, "korean": "핸드폰", "chinese": "手机", "pinyin": "shǒujī" },

    // Lesson 9: Pronouns & Actions (All together / Both)
    { "lesson": 9, "korean": "우리들", "chinese": "我们", "pinyin": "wǒmen" },
    { "lesson": 9, "korean": "너희들, 당신들", "chinese": "你们", "pinyin": "nǐmen" },
    { "lesson": 9, "korean": "그들", "chinese": "他们", "pinyin": "tāmen" },
    { "lesson": 9, "korean": "~도, 또한", "chinese": "也", "pinyin": "yě" },
    { "lesson": 9, "korean": "모두", "chinese": "都", "pinyin": "dōu" },
    { "lesson": 9, "korean": "가다", "chinese": "去", "pinyin": "qù" },
    { "lesson": 9, "korean": "배우다", "chinese": "学", "pinyin": "xué" },
    { "lesson": 9, "korean": "사다", "chinese": "买", "pinyin": "mǎi" },
    { "lesson": 9, "korean": "듣다", "chinese": "听", "pinyin": "tīng" },
    { "lesson": 9, "korean": "보다", "chinese": "看", "pinyin": "kàn" },

    // Lesson 10: Demonstratives, Questions & Adjectives
    { "lesson": 10, "korean": "이것", "chinese": "这个", "pinyin": "zhège" },
    { "lesson": 10, "korean": "그것, 저것", "chinese": "那个", "pinyin": "nàge" },
    { "lesson": 10, "korean": "어느 것", "chinese": "哪个", "pinyin": "nǎge" },
    { "lesson": 10, "korean": "비싸다", "chinese": "贵", "pinyin": "guì" },
    { "lesson": 10, "korean": "보기 좋다, 예쁘다", "chinese": "好看", "pinyin": "hǎokàn" },
    { "lesson": 10, "korean": "그다지 ~하지 않다, 별로 ~하지 않다", "chinese": "不太", "pinyin": "bú tài" },
    { "lesson": 10, "korean": "가장, 제일", "chinese": "最", "pinyin": "zuì" },
    { "lesson": 10, "korean": "많다", "chinese": "多", "pinyin": "duō" },
    { "lesson": 10, "korean": "졸리다", "chinese": "困", "pinyin": "kùn" },
    { "lesson": 10, "korean": "맛있다", "chinese": "好吃", "pinyin": "hǎochī" },
    { "lesson": 10, "korean": "굉장히, 대단히", "chinese": "非常", "pinyin": "fēicháng" },
    { "lesson": 10, "korean": "배고프다", "chinese": "饿", "pinyin": "è" },
    { "lesson": 10, "korean": "맛있다 (음료)", "chinese": "好喝", "pinyin": "hǎohē" },
    { "lesson": 10, "korean": "바지", "chinese": "裤子", "pinyin": "kùzi" },
    { "lesson": 10, "korean": "치마", "chinese": "裙子", "pinyin": "qúnzi" },
    { "lesson": 10, "korean": "신발", "chinese": "鞋", "pinyin": "xié" },
    { "lesson": 10, "korean": "모자", "chinese": "帽子", "pinyin": "màozi" },
    { "lesson": 10, "korean": "핸드백", "chinese": "手提包", "pinyin": "shǒutíbāo" },
    { "lesson": 10, "korean": "지갑", "chinese": "钱包", "pinyin": "qiánbāo" },

    // Lesson 11: Questions, Activities & Langs
    { "lesson": 11, "korean": "무엇, 무슨", "chinese": "什么", "pinyin": "shénme" },
    { "lesson": 11, "korean": "어떠하다", "chinese": "怎么样", "pinyin": "zěnmeyàng" },
    { "lesson": 11, "korean": "배우다", "chinese": "学", "pinyin": "xué" },
    { "lesson": 11, "korean": "중국어", "chinese": "汉语", "pinyin": "Hànyǔ" },
    { "lesson": 11, "korean": "재미있다", "chinese": "有意思", "pinyin": "yǒu yìsi" },
    { "lesson": 11, "korean": "케이크", "chinese": "蛋糕", "pinyin": "dàngāo" },
    { "lesson": 11, "korean": "쓰다", "chinese": "写", "pinyin": "xiě" },
    { "lesson": 11, "korean": "한자", "chinese": "汉字", "pinyin": "Hànzì" },
    { "lesson": 11, "korean": "요리를 하다", "chinese": "做菜", "pinyin": "zuò cài" },
    { "lesson": 11, "korean": "한국어", "chinese": "韩语", "pinyin": "Hányǔ" },
    { "lesson": 11, "korean": "말하다", "chinese": "说", "pinyin": "shuō" },

    // Lesson 12: Relationships & Professions
    { "lesson": 12, "korean": "~이다", "chinese": "是", "pinyin": "shì" },
    { "lesson": 12, "korean": "누구", "chinese": "谁", "pinyin": "shéi" },
    { "lesson": 12, "korean": "친구", "chinese": "朋友", "pinyin": "péngyou" },
    { "lesson": 12, "korean": "여자 친구", "chinese": "女朋友", "pinyin": "nǚpéngyou" },
    { "lesson": 12, "korean": "~의, ~한", "chinese": "的", "pinyin": "de" },
    { "lesson": 12, "korean": "학우, 학교 친구", "chinese": "同学", "pinyin": "tóngxué" },
    { "lesson": 12, "korean": "의사", "chinese": "医生", "pinyin": "yīshēng" },
    { "lesson": 12, "korean": "간호사", "chinese": "护士", "pinyin": "hùshi" },

    // Lesson 13: Locations & Prepositions
    { "lesson": 13, "korean": "카페, 커피숍", "chinese": "咖啡店", "pinyin": "kāfēidiàn" },
    { "lesson": 13, "korean": "~에 있다", "chinese": "在", "pinyin": "zài" },
    { "lesson": 13, "korean": "바로", "chinese": "就", "pinyin": "jiù" },
    { "lesson": 13, "korean": "어디, 어느 곳", "chinese": "哪儿", "pinyin": "nǎr" },
    { "lesson": 13, "korean": "여기, 이곳", "chinese": "这儿", "pinyin": "zhèr" },
    { "lesson": 13, "korean": "거기, 저기, 그곳, 저곳", "chinese": "那儿", "pinyin": "nàr" },
    { "lesson": 13, "korean": "도서관", "chinese": "图书馆", "pinyin": "túshūguǎn" },
    { "lesson": 13, "korean": "PC방", "chinese": "网吧", "pinyin": "wǎngbā" },
    { "lesson": 13, "korean": "양말", "chinese": "袜子", "pinyin": "wàzi" },
    { "lesson": 13, "korean": "신발", "chinese": "鞋", "pinyin": "xié" },
    { "lesson": 13, "korean": "집", "chinese": "家", "pinyin": "jiā" },
    { "lesson": 13, "korean": "서울", "chinese": "首尔", "pinyin": "Shǒu'ěr" },
    { "lesson": 13, "korean": "학교", "chinese": "学校", "pinyin": "xuéxiào" },
    { "lesson": 13, "korean": "부산", "chinese": "釜山", "pinyin": "Fǔshān" },
    { "lesson": 13, "korean": "가족", "chinese": "家人", "pinyin": "jiārén" },
    { "lesson": 13, "korean": "서점", "chinese": "书店", "pinyin": "shūdiàn" },
    { "lesson": 13, "korean": "맥도날드", "chinese": "麦当劳", "pinyin": "Màidāngláo" },
    { "lesson": 13, "korean": "스타벅스", "chinese": "星巴克", "pinyin": "Xīngbākè" },
    { "lesson": 13, "korean": "은행", "chinese": "银行", "pinyin": "yínháng" },
    { "lesson": 13, "korean": "병원", "chinese": "医院", "pinyin": "yīyuàn" },

    // Lesson 14: Time, Daily Routine & Numbers
    { "lesson": 14, "korean": "지금, 현재", "chinese": "现在", "pinyin": "xiànzài" },
    { "lesson": 14, "korean": "몇 (10 미만의 수를 물을 때 쓰임)", "chinese": "几", "pinyin": "jǐ" },
    { "lesson": 14, "korean": "(시각의) 시", "chinese": "点", "pinyin": "diǎn" },
    { "lesson": 14, "korean": "수업하다", "chinese": "上课", "pinyin": "shàng kè" },
    { "lesson": 14, "korean": "수업을 마치다, 수업이 끝나다", "chinese": "下课", "pinyin": "xià kè" },
    { "lesson": 14, "korean": "반, 절반", "chinese": "半", "pinyin": "bàn" },
    { "lesson": 14, "korean": "출근하다", "chinese": "上班", "pinyin": "shàng bān" },
    { "lesson": 14, "korean": "퇴근하다", "chinese": "下班", "pinyin": "xià bān" },
    { "lesson": 14, "korean": "일어나다, 기상하다", "chinese": "起床", "pinyin": "qǐ chuáng" },
    { "lesson": 14, "korean": "잠자다", "chinese": "睡觉", "pinyin": "shuì jiào" },
    { "lesson": 14, "korean": "분", "chinese": "分", "pinyin": "fēn" },
    { "lesson": 14, "korean": "15분", "chinese": "刻", "pinyin": "kè" },
    { "lesson": 14, "korean": "모자라다", "chinese": "差", "pinyin": "chà" },
    { "lesson": 14, "korean": "아침(밥)", "chinese": "早饭", "pinyin": "zǎofàn" },
    { "lesson": 14, "korean": "점심(밥)", "chinese": "午饭", "pinyin": "wǔfàn" },
    { "lesson": 14, "korean": "컴퓨터를 하다", "chinese": "玩儿电脑", "pinyin": "wánr diànnǎo" },
    { "lesson": 14, "korean": "학원", "chinese": "补习班", "pinyin": "bǔxíbān" },
    { "lesson": 14, "korean": "목욕하다, 샤워하다", "chinese": "洗澡", "pinyin": "xǐ zǎo" },
    { "lesson": 14, "korean": "양치하다, 이를 닦다", "chinese": "刷牙", "pinyin": "shuā yá" },
    { "lesson": 14, "korean": "옷을 입다", "chinese": "穿衣服", "pinyin": "chuān yīfu" },

    // Lesson 15: Existence & Breakfast
    { "lesson": 15, "korean": "있다, 가지고 있다", "chinese": "有", "pinyin": "yǒu" },
    { "lesson": 15, "korean": "핫도그", "chinese": "热狗", "pinyin": "règǒu" },
    { "lesson": 15, "korean": "햄버거", "chinese": "汉堡包", "pinyin": "hànbǎobāo" },
    { "lesson": 15, "korean": "샌드위치", "chinese": "三明治", "pinyin": "sānmíngzhì" },
    { "lesson": 15, "korean": "죄송합니다, 미안합니다", "chinese": "对不起", "pinyin": "duìbuqǐ" },
    { "lesson": 15, "korean": "~와/과", "chinese": "和", "pinyin": "hé" },
    { "lesson": 15, "korean": "유탸오", "chinese": "油条", "pinyin": "yóutiáo" },
    { "lesson": 15, "korean": "더우장", "chinese": "豆浆", "pinyin": "dòujiāng" },
    { "lesson": 15, "korean": "죽", "chinese": "粥", "pinyin": "zhōu" },
    { "lesson": 15, "korean": "왕만두", "chinese": "包子", "pinyin": "bāozi" },
    { "lesson": 15, "korean": "젠빙", "chinese": "煎饼", "pinyin": "jiānbing" },
    { "lesson": 15, "korean": "훈툰", "chinese": "馄饨", "pinyin": "húntun" },
    { "lesson": 15, "korean": "영어", "chinese": "英语", "pinyin": "Yīngyǔ" },
    { "lesson": 15, "korean": "인형", "chinese": "娃娃", "pinyin": "wáwa" },
    { "lesson": 15, "korean": "책", "chinese": "书", "pinyin": "shū" },
    { "lesson": 15, "korean": "침대", "chinese": "床", "pinyin": "chuáng" },
    { "lesson": 15, "korean": "탁자", "chinese": "桌子", "pinyin": "zhuōzi" },
    { "lesson": 15, "korean": "의자", "chinese": "椅子", "pinyin": "yǐzi" },
    { "lesson": 15, "korean": "핸드폰", "chinese": "手机", "pinyin": "shǒujī" },

    // Lesson 16: Ordering & Quantifiers
    { "lesson": 16, "korean": "원하다, 필요하다", "chinese": "要", "pinyin": "yào" },
    { "lesson": 16, "korean": "주다", "chinese": "给", "pinyin": "gěi" },
    { "lesson": 16, "korean": "~하세요, ~해 주십시오", "chinese": "请", "pinyin": "qǐng" },
    { "lesson": 16, "korean": "기다리다", "chinese": "等", "pinyin": "děng" },
    { "lesson": 16, "korean": "2, 둘", "chinese": "两", "pinyin": "liǎng" },
    { "lesson": 16, "korean": "개, 명 (양사)", "chinese": "个", "pinyin": "gè" },
    { "lesson": 16, "korean": "잔, 컵", "chinese": "杯", "pinyin": "bēi" },
    { "lesson": 16, "korean": "한 번, 잠시", "chinese": "一下", "pinyin": "yíxià" },
    { "lesson": 16, "korean": "권 (책을 세는 양사)", "chinese": "本", "pinyin": "běn" },
    { "lesson": 16, "korean": "자루 (연필 등을 세는 양사)", "chinese": "支", "pinyin": "zhī" },
    { "lesson": 16, "korean": "연필", "chinese": "铅笔", "pinyin": "qiānbǐ" },
    { "lesson": 16, "korean": "공기, 그릇", "chinese": "碗", "pinyin": "wǎn" },
    { "lesson": 16, "korean": "병", "chinese": "瓶", "pinyin": "píng" },
    { "lesson": 16, "korean": "맥주", "chinese": "啤酒", "pinyin": "píjiǔ" },
    { "lesson": 16, "korean": "아이", "chinese": "孩子", "pinyin": "háizi" },
    { "lesson": 16, "korean": "벌 (옷을 세는 양사)", "chinese": "件", "pinyin": "jiàn" }
];
let currentModule = null;
let currentLesson = 1;

function getLessonWords() {
    return words.filter(w => w.lesson === currentLesson);
}

// Initialization functions (data now inline, no fetch needed)
async function loadWords() {
    console.log('Words loaded', words.length);
}

// Navigation handling
function initNavigation() {
    const navButtons = document.querySelectorAll('.tab-nav button');
    const lessonButtons = document.querySelectorAll('.lesson-nav button');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button UI
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // Load corresponding module
            currentModule = btn.dataset.tab;
            loadModule(currentModule);
        });
    });

    lessonButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            lessonButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentLesson = parseInt(btn.dataset.lesson, 10);
            if (currentModule) loadModule(currentModule);
        });
    });

    // Activate first tab by default
    if (navButtons.length) navButtons[0].click();
}

// Simple module loader (placeholder implementations)
async function loadModule(name) {
    const root = document.getElementById('app-root');
    root.innerHTML = '';
    switch (name) {
        case 'cards':
            renderCardModule(root);
            break;
        case 'stroke':
            renderStrokeModule(root);
            break;
        case 'pinyin-quiz':
            renderPinyinQuizModule(root);
            break;
        case 'korean-quiz':
            renderKoreanQuizModule(root);
            break;
        case 'pronunciation':
            renderPronunciationModule(root);
            break;
        case 'conversation':
            renderConversationModule(root);
            break;
        default:
            root.innerHTML = '<p>Module not found</p>';
    }
}

// Word Card UI (Flip Card Implementation)
function renderCardModule(container) {
    const lessonWords = getLessonWords();
    if (!lessonWords.length) {
        container.innerHTML = '<p>No words available for this lesson.</p>';
        return;
    }
    let index = 0;

    const topBar = document.createElement('div');
    topBar.style.display = 'flex';
    topBar.style.justifyContent = 'space-between';
    topBar.style.alignItems = 'center';
    topBar.style.maxWidth = '450px';
    topBar.style.margin = '0 auto 1rem auto';

    const countDisplay = document.createElement('div');
    countDisplay.style.fontSize = '1.2rem';
    countDisplay.style.fontWeight = 'bold';
    countDisplay.style.color = 'var(--primary-color)';
    topBar.appendChild(countDisplay);

    container.appendChild(topBar);

    // Create flip card container
    const flipCard = document.createElement('div');
    flipCard.className = 'flip-card';
    flipCard.style.marginTop = '1rem';
    flipCard.onclick = () => flipCard.classList.toggle('flipped');

    const updateUI = () => {
        countDisplay.textContent = `${index + 1} / ${lessonWords.length}`;
        updateFlipCard(flipCard, lessonWords[index]);
    };

    updateUI();

    const btnContainer = document.createElement('div');
    btnContainer.style.textAlign = 'center';

    const prevBtn = document.createElement('button');
    prevBtn.className = 'opt-btn';
    prevBtn.style.margin = '0.5rem';
    prevBtn.style.padding = '0.5rem 1rem';
    prevBtn.textContent = '◀ 이전';

    const nextBtn = document.createElement('button');
    nextBtn.className = 'opt-btn';
    nextBtn.style.margin = '0.5rem';
    nextBtn.style.padding = '0.5rem 1rem';
    nextBtn.textContent = '다음 ▶';

    prevBtn.onclick = () => {
        index = (index - 1 + lessonWords.length) % lessonWords.length;
        flipCard.classList.remove('flipped');
        setTimeout(updateUI, 150);
    };
    nextBtn.onclick = () => {
        index = (index + 1) % lessonWords.length;
        flipCard.classList.remove('flipped');
        setTimeout(updateUI, 150);
    };

    container.appendChild(flipCard);
    btnContainer.appendChild(prevBtn);
    btnContainer.appendChild(nextBtn);
    container.appendChild(btnContainer);

    // List Panel
    const listBtn = document.createElement('button');
    listBtn.className = 'opt-btn';
    listBtn.style.display = 'block';
    listBtn.style.margin = '2rem auto 0 auto';
    listBtn.textContent = '📑 전체 목록 보기 / 숨기기';

    const listPanel = document.createElement('div');
    listPanel.className = 'word-list-panel';
    listPanel.style.display = 'none';
    listPanel.style.maxWidth = '450px';
    listPanel.style.margin = '1rem auto';

    lessonWords.forEach((w, i) => {
        const item = document.createElement('div');
        item.className = 'word-list-item';
        item.innerHTML = `
            <span style="font-size:1.5rem; font-family:'SimHei',sans-serif;">${w.chinese}</span>
            <span style="color:#aaa;">${w.pinyin}</span>
            <span>${w.korean}</span>
        `;
        item.onclick = () => {
            index = i;
            flipCard.classList.remove('flipped');
            updateUI();
            listPanel.style.display = 'none';
        };
        listPanel.appendChild(item);
    });

    listBtn.onclick = () => {
        listPanel.style.display = listPanel.style.display === 'none' ? 'block' : 'none';
    };

    container.appendChild(listBtn);
    container.appendChild(listPanel);
}

function updateFlipCard(cardElem, word) {
    cardElem.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h2 style="font-size: 4rem; font-family: 'SimHei', sans-serif;">${word.chinese}</h2>
          <p style="color: #aaa; margin-top:1rem;">클릭하여 뒤집기</p>
        </div>
        <div class="flip-card-back">
          <h2 style="font-size: 2.5rem; color: var(--primary-color);">${word.pinyin}</h2>
          <p style="font-size: 1.8rem; margin-top:1rem;">${word.korean}</p>
          <button id="play-audio" style="margin-top:2rem; padding: 0.8rem 1.5rem; background: var(--primary-color); color:var(--bg-color); border:none; border-radius:1rem; cursor:pointer;" onclick="event.stopPropagation()">발음 듣기</button>
        </div>
      </div>
  `;
    cardElem.querySelector('#play-audio').onclick = (e) => {
        e.stopPropagation();
        const utterance = new SpeechSynthesisUtterance(word.chinese);
        utterance.lang = 'zh-CN';
        window.speechSynthesis.speak(utterance);
    };
}

// Stroke Practice UI
function renderStrokeModule(container) {
    const lessonWords = getLessonWords();
    if (!lessonWords.length) {
        container.innerHTML = '<p>No words available for this lesson.</p>';
        return;
    }

    const card = document.createElement('div');
    card.className = 'card';
    card.style.maxWidth = '600px';
    container.appendChild(card);

    let currentIndex = 0;
    let writer = null;

    const listPanel = document.createElement('div');
    listPanel.className = 'word-list-panel';
    listPanel.style.display = 'flex';
    listPanel.style.flexWrap = 'wrap';
    listPanel.style.gap = '0.5rem';
    listPanel.style.marginBottom = '2rem';
    listPanel.style.maxHeight = 'none';

    lessonWords.forEach((w, i) => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.style.padding = '0.5rem 1rem';
        btn.style.fontSize = '1.2rem';
        btn.style.fontFamily = "'SimHei', sans-serif";
        btn.textContent = w.chinese;
        btn.onclick = () => {
            renderCharacter(i);
        };
        listPanel.appendChild(btn);
    });

    container.insertBefore(listPanel, card);

    function renderCharacter(index) {
        currentIndex = index;
        const word = lessonWords[index];
        const chars = Array.from(word.chinese);

        // Highlight active word in list
        Array.from(listPanel.children).forEach((btn, i) => {
            btn.style.background = i === index ? 'var(--primary-color)' : 'transparent';
            btn.style.color = i === index ? 'var(--bg-color)' : 'var(--text-color)';
        });

        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1rem;">
                <p style="font-size: 1.5rem;">${word.korean} - ${word.pinyin}</p>
                <div style="font-weight:bold; color:var(--primary-color);">${index + 1} / ${lessonWords.length}</div>
            </div>
            
            <div id="character-nav" style="display:flex; justify-content:center; gap:0.5rem; margin-bottom:1rem; font-family: 'SimHei', sans-serif;">
                ${chars.map((c, i) => `<button class="opt-btn" style="padding:0.5rem 1rem;" data-char-idx="${i}">${c}</button>`).join('')}
            </div>
            
            <div id="hanzi-container" style="width: 250px; height: 250px; margin: 0 auto; background: #ddd; border-radius: 8px;"></div>
            
            <div style="margin-top: 1rem; display:flex; justify-content:center; gap:0.5rem;">
                <button id="btn-animate" style="background:var(--primary-color); border:none; padding:0.5rem 1rem; color:var(--bg-color); border-radius:0.5rem; cursor:pointer;">획순 보기</button>
                <button id="btn-quiz" style="background:var(--secondary-color); border:1px solid var(--primary-color); padding:0.5rem 1rem; color:var(--primary-color); border-radius:0.5rem; cursor:pointer;">직접 쓰기</button>
            </div>
            
            <div style="margin-top: 2rem; display:flex; justify-content:space-between;">
                <button id="prev-word" class="opt-btn" style="width:48%;">이전 단어</button>
                <button id="next-word" class="opt-btn" style="width:48%;">다음 단어</button>
            </div>
        `;

        function loadCharWriter(charIndex) {
            const containerEl = document.getElementById('hanzi-container');
            containerEl.innerHTML = '';

            // Highlight selected character button
            card.querySelectorAll('#character-nav button').forEach((btn, i) => {
                btn.style.background = i === charIndex ? 'var(--primary-color)' : 'rgba(255,255,255,0.1)';
                btn.style.color = i === charIndex ? 'var(--bg-color)' : 'var(--text-color)';
            });

            if (typeof HanziWriter !== 'undefined') {
                writer = HanziWriter.create('hanzi-container', chars[charIndex], {
                    width: 250,
                    height: 250,
                    padding: 10,
                    showOutline: true,
                    strokeAnimationSpeed: 1.5,
                    delayBetweenStrokes: 50,
                    drawingColor: "#00bfa5",
                    outlineColor: "#999999"
                });
            } else {
                containerEl.innerHTML = '<p style="color:red; padding:2rem;">HanziWriter failed to load. Check internet connection.</p>';
            }
        }

        loadCharWriter(0);

        card.querySelectorAll('#character-nav button').forEach(btn => {
            btn.onclick = (e) => loadCharWriter(parseInt(e.target.dataset.charIdx));
        });

        card.querySelector('#btn-animate').onclick = () => { if (writer) writer.animateCharacter(); };
        card.querySelector('#btn-quiz').onclick = () => { if (writer) writer.quiz(); };

        card.querySelector('#prev-word').onclick = () => renderCharacter((index - 1 + lessonWords.length) % lessonWords.length);
        card.querySelector('#next-word').onclick = () => renderCharacter((index + 1) % lessonWords.length);
    }

    renderCharacter(0);
}

// Canvas Drawing Helper
function setupDrawingCanvas(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;
    const ctx = canvas.getContext('2d');

    setTimeout(() => {
        // Fit to container dimensions after DOM layout
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        ctx.strokeStyle = '#00bfa5';
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
    }, 50);

    let isDrawing = false;

    function getPos(e) {
        const rect = canvas.getBoundingClientRect();
        if (e.touches && e.touches.length > 0) {
            return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
        }
        return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }

    function startDraw(e) {
        isDrawing = true;
        ctx.beginPath();
        const pos = getPos(e);
        ctx.moveTo(pos.x, pos.y);
    }

    function draw(e) {
        if (!isDrawing) return;
        e.preventDefault(); // prevent scroll
        const pos = getPos(e);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
    }

    function stopDraw() {
        isDrawing = false;
        ctx.closePath();
    }

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDraw);
    canvas.addEventListener('mouseout', stopDraw);

    canvas.addEventListener('touchstart', startDraw, { passive: false });
    canvas.addEventListener('touchmove', draw, { passive: false });
    canvas.addEventListener('touchend', stopDraw);

    return {
        clear: () => ctx.clearRect(0, 0, canvas.width, canvas.height)
    };
}

// Tone Number to Pinyin Converter Helper
function convertToneNumbers(pinyinStr) {
    const toneMap = {
        'a': ['ā', 'á', 'ǎ', 'à'],
        'e': ['ē', 'é', 'ě', 'è'],
        'i': ['ī', 'í', 'ǐ', 'ì'],
        'o': ['ō', 'ó', 'ǒ', 'ò'],
        'u': ['ū', 'ú', 'ǔ', 'ù'],
        'ü': ['ǖ', 'ǘ', 'ǚ', 'ǜ'],
        'v': ['ǖ', 'ǘ', 'ǚ', 'ǜ']
    };

    return pinyinStr.replace(/([a-zA-Züv]+)(\d)/g, (match, p1, p2) => {
        const tone = parseInt(p2, 10);
        if (tone < 1 || tone > 4) return match;

        let chars = p1.split('');
        let targetIdx = -1;
        ['a', 'o', 'e', 'i', 'u', 'v', 'ü'].forEach(v => {
            if (targetIdx === -1) targetIdx = chars.indexOf(v);
        });

        if (targetIdx !== -1) {
            chars[targetIdx] = toneMap[chars[targetIdx].toLowerCase()][tone - 1];
        } else if (chars.length > 1 && (chars[chars.length - 1] === 'i' || chars[chars.length - 1] === 'u')) {
            chars[chars.length - 1] = toneMap[chars[chars.length - 1].toLowerCase()][tone - 1];
        }
        return chars.join('');
    });
}

// Pinyin Quiz UI (See Pinyin -> Write Korean, Draw Hanzi)
function renderPinyinQuizModule(container) {
    const lessonWords = getLessonWords();
    if (!lessonWords.length) {
        container.innerHTML = '<p>No words available for this lesson.</p>';
        return;
    }
    const card = document.createElement('div');
    card.className = 'card';
    card.style.maxWidth = '600px';
    container.appendChild(card);

    let drawingCtx;

    function loadQuestion() {
        const word = lessonWords[Math.floor(Math.random() * lessonWords.length)];
        card.innerHTML = `
      <p style="font-size:3rem; margin:1rem 0; color:var(--primary-color);">${word.pinyin}</p>
      
      <div class="quiz-flex" style="font-family: 'SimHei', sans-serif;">
          <div>
              <p style="text-align:left; font-weight:bold; margin-bottom:0.5rem; font-family: 'Inter', sans-serif;">1. 한국어 의미를 쓰시오:</p>
              <input type="text" id="quiz-answer" class="quiz-input" style="margin:0;" autocomplete="off">
          </div>
          <div>
              <p style="text-align:left; font-weight:bold; margin-bottom:0.5rem; font-family: 'Inter', sans-serif;">2. 한자로 쓰기:</p>
              <div class="canvas-container">
                  <canvas id="hanzi-canvas" class="draw-canvas"></canvas>
              </div>
              <div class="canvas-controls">
                  <button id="clear-canvas" style="font-family: 'Inter', sans-serif;">전체 획 지우기</button>
              </div>
          </div>
      </div>
      
      <button id="submit-answer" style="width:100%; margin-top:1.5rem;">제출</button>
      <div id="quiz-feedback" class="quiz-feedback" style="min-height:3rem;"></div>
      <button id="next-question" style="display:none; width:100%; margin-top:0.5rem; background: var(--secondary-color); color:var(--text-color);">다음 단어</button>
    `;

        setTimeout(() => {
            drawingCtx = setupDrawingCanvas('hanzi-canvas');
            if (drawingCtx) card.querySelector('#clear-canvas').onclick = drawingCtx.clear;
        }, 50);

        card.querySelector('#submit-answer').onclick = () => {
            const input = card.querySelector('#quiz-answer').value.trim();
            const feedback = card.querySelector('#quiz-feedback');
            const nextBtn = card.querySelector('#next-question');

            // Compare Korean meaning (forgiving)
            if (word.korean.includes(input) && input.length > 0) {
                feedback.innerHTML = `Correct! Hanzi is: <span style="font-size:1.8rem; vertical-align:middle; color:#fff;">${word.chinese}</span>`;
                feedback.className = 'quiz-feedback feedback-correct';
            } else {
                feedback.innerHTML = `Incorrect. Answer: ${word.korean} | Hanzi: <span style="font-size:1.8rem; vertical-align:middle; color:#fff;">${word.chinese}</span>`;
                feedback.className = 'quiz-feedback feedback-wrong';
            }
            nextBtn.style.display = 'inline-block';
        };

        card.querySelector('#next-question').onclick = loadQuestion;
    }

    loadQuestion();
}

// Korean Quiz UI (See Korean -> Write Pinyin, Draw Hanzi)
function renderKoreanQuizModule(container) {
    const lessonWords = getLessonWords();
    if (!lessonWords.length) {
        container.innerHTML = '<p>No words available for this lesson.</p>';
        return;
    }
    const card = document.createElement('div');
    card.className = 'card';
    card.style.maxWidth = '600px';
    container.appendChild(card);

    let drawingCtx;

    function loadQuestion() {
        const word = lessonWords[Math.floor(Math.random() * lessonWords.length)];

        card.innerHTML = `
      <p style="font-size:2rem; margin:1rem 0; color:var(--primary-color);">${word.korean}</p>
      
      <div class="quiz-flex" style="font-family: 'SimHei', sans-serif;">
          <div>
              <p style="text-align:left; font-weight:bold; margin-bottom:0.5rem; font-family: 'Inter', sans-serif;">1. 한자로 쓰기:</p>
              <div class="canvas-container">
                  <canvas id="hanzi-canvas" class="draw-canvas"></canvas>
              </div>
              <div class="canvas-controls">
                  <button id="clear-canvas" style="font-family: 'Inter', sans-serif;">전체 획 지우기</button>
              </div>
          </div>
          <div>
              <p style="text-align:left; font-weight:bold; margin-bottom:0.5rem; font-family: 'Inter', sans-serif;">2. 병음 쓰기 (예: ni3 hao3):</p>
              <input type="text" id="quiz-answer" class="quiz-input" style="margin:0;" autocomplete="off" placeholder="예: ni3 hao3">
          </div>
      </div>
      
      <button id="submit-answer" style="width:100%; margin-top:1.5rem;">제출</button>
      <div id="quiz-feedback" class="quiz-feedback" style="min-height:3rem;"></div>
      <button id="next-question" style="display:none; width:100%; margin-top:0.5rem; background: var(--secondary-color); color:var(--text-color);">다음 단어</button>
    `;

        setTimeout(() => {
            drawingCtx = setupDrawingCanvas('hanzi-canvas');
            if (drawingCtx) card.querySelector('#clear-canvas').onclick = drawingCtx.clear;
        }, 50);

        card.querySelector('#submit-answer').onclick = () => {
            const input = card.querySelector('#quiz-answer').value.trim();
            const convertedInput = convertToneNumbers(input).toLowerCase();
            const feedback = card.querySelector('#quiz-feedback');
            const nextBtn = card.querySelector('#next-question');

            // Strip tones for a forgiving match
            const removeTones = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/v/g, 'u').replace(/ü/g, 'u').toLowerCase();
            const isCorrect = removeTones(input) === removeTones(word.pinyin) || convertedInput === word.pinyin.toLowerCase();

            if (isCorrect) {
                feedback.innerHTML = `Correct! Hanzi: <span style="font-size:1.8rem; vertical-align:middle; color:#4caf50;">${word.chinese}</span> | Pinyin: ${word.pinyin}`;
                feedback.className = 'quiz-feedback feedback-correct';
            } else {
                feedback.innerHTML = `Incorrect. Hanzi: <span style="font-size:1.8rem; vertical-align:middle; color:#fff;">${word.chinese}</span> | Pinyin: ${word.pinyin}`;
                feedback.className = 'quiz-feedback feedback-wrong';
            }
            nextBtn.style.display = 'inline-block';
        };

        card.querySelector('#next-question').onclick = loadQuestion;
    }

    loadQuestion();
}

// Pronunciation Module UI (with SpeechRecognition scoring)
function renderPronunciationModule(container) {
    const lessonWords = getLessonWords();
    if (!lessonWords.length) {
        container.innerHTML = '<p>No words available for this lesson.</p>';
        return;
    }
    const card = document.createElement('div');
    card.className = 'card';
    card.style.maxWidth = '600px';
    container.appendChild(card);

    let recognition = null;
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.lang = 'zh-CN';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
    }

    let currentIndex = 0;

    function loadQuestion() {
        const word = lessonWords[currentIndex];
        card.innerHTML = `
      <div style="text-align:right; font-weight:bold; color:var(--primary-color); margin-bottom:1rem;">
          ${currentIndex + 1} / ${lessonWords.length}
      </div>
      <p style="font-size:3rem; margin:0 0 1rem 0; color:var(--primary-color); font-family: 'SimHei', sans-serif;">${word.chinese}</p>
      <p style="font-size:1.5rem; margin-bottom:1rem; color:#aaa;">${word.pinyin}</p>
      
      <button id="play-native" style="margin-bottom:1.5rem; width:100%; padding: 1rem; font-size: 1.1rem;">🎧 발음 듣기</button>
      
      <div style="padding: 1.5rem; background: rgba(0,0,0,0.3); border-radius: 1rem; border: 1px solid rgba(255,255,255,0.1);">
          <p style="margin-bottom: 1rem; font-weight: bold;">직접 녹음해 보세요:</p>
          <button id="start-record" style="width:100%; background:#f44336; padding: 1rem; font-size: 1.1rem; border-radius:2rem;">🎤 터치하여 말하기</button>
          <div id="pronounce-feedback" class="quiz-feedback" style="min-height:3rem; margin-top:1.5rem; font-size:1.2rem; font-family: 'SimHei', sans-serif;"></div>
          <div id="score-bar-container" style="display:none; width:100%; height:10px; background:rgba(255,255,255,0.1); border-radius:5px; margin-top:1rem; overflow:hidden;">
              <div id="score-bar" style="height:100%; width:0%; background:var(--primary-color); transition: width 0.5s ease;"></div>
          </div>
          <div id="score-text" style="margin-top:0.5rem; font-size:1rem; color:#aaa; display:none;"></div>
      </div>
      
      <div style="display:flex; justify-content:space-between; margin-top:1.5rem; gap:1rem;">
          <button id="prev-word" class="opt-btn" style="flex:1;">이전 단어</button>
          <button id="next-word" class="opt-btn" style="flex:1;">다음 단어</button>
      </div>
    `;

        const playNativeBtn = card.querySelector('#play-native');
        const startRecordBtn = card.querySelector('#start-record');
        const feedback = card.querySelector('#pronounce-feedback');
        const nextWordBtn = card.querySelector('#next-word');
        const prevWordBtn = card.querySelector('#prev-word');
        const scoreBarContainer = card.querySelector('#score-bar-container');
        const scoreBar = card.querySelector('#score-bar');
        const scoreText = card.querySelector('#score-text');

        playNativeBtn.onclick = () => {
            const utterance = new SpeechSynthesisUtterance(word.chinese);
            utterance.lang = 'zh-CN';
            utterance.rate = 0.85; // Slightly slower
            window.speechSynthesis.speak(utterance);
        };

        if (recognition) {
            let isRecording = false;

            const resetBtn = () => {
                isRecording = false;
                startRecordBtn.style.background = '#f44336';
                startRecordBtn.textContent = '🎤 터치하여 말하기';
            };

            startRecordBtn.onclick = (e) => {
                e.preventDefault();
                if (isRecording) {
                    try { recognition.stop(); } catch (e) { }
                    resetBtn();
                    return;
                }

                isRecording = true;
                startRecordBtn.style.background = '#d32f2f';
                startRecordBtn.textContent = '듣는 중... (종료 시 터치)';
                feedback.textContent = '';
                scoreBarContainer.style.display = 'none';
                scoreText.style.display = 'none';
                try {
                    recognition.start();
                } catch (e) {
                    resetBtn();
                }
            };

            recognition.onend = resetBtn;

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript.replace(/[.!?。！？\s]/g, '');
                const target = word.chinese.replace(/[.!?。！？\s]/g, '');

                let matchAmount = 0;
                for (let i = 0; i < Math.min(transcript.length, target.length); i++) {
                    if (transcript[i] === target[i]) matchAmount++;
                }
                const score = Math.round((matchAmount / Math.max(target.length, 1)) * 100);

                scoreBarContainer.style.display = 'block';
                scoreText.style.display = 'block';
                scoreBar.style.width = score + '%';
                scoreText.textContent = `정확도: ${score}%`;

                if (transcript === target || score > 80) {
                    feedback.innerHTML = `Excellent! You said: <span style="color:#4caf50;">${transcript}</span>`;
                    feedback.className = 'quiz-feedback feedback-correct';
                    scoreBar.style.background = '#4caf50';
                } else if (score > 40) {
                    feedback.innerHTML = `Close! You said: <span style="color:#ff9800;">${transcript}</span>. Target: ${target}`;
                    feedback.className = 'quiz-feedback';
                    feedback.style.color = '#ff9800';
                    scoreBar.style.background = '#ff9800';
                } else {
                    feedback.innerHTML = `Keep trying. You said: <span style="color:#f44336;">${transcript}</span>`;
                    feedback.className = 'quiz-feedback feedback-wrong';
                    scoreBar.style.background = '#f44336';
                }
            };

            recognition.onerror = (event) => {
                feedback.innerHTML = `Microphone error: ${event.error}. Please try again.`;
                feedback.className = 'quiz-feedback feedback-wrong';
            };
        } else {
            startRecordBtn.disabled = true;
            startRecordBtn.textContent = 'Speech Recognition Not Supported in this Browser';
            startRecordBtn.style.background = '#555';
        }

        nextWordBtn.onclick = () => {
            currentIndex = (currentIndex + 1) % lessonWords.length;
            loadQuestion();
        };

        prevWordBtn.onclick = () => {
            currentIndex = (currentIndex - 1 + lessonWords.length) % lessonWords.length;
            loadQuestion();
        };
    }

    loadQuestion();
}

// Conversation Module Data (Listening Comprehension)
let dialogues = [
    {
        "lesson": 1,
        "title": "회화 듣기 연습",
        "steps": [
            {
                "audioText": "你好！",
                "options": [
                    { "text": "你好！ (Nǐ hǎo!)", "correct": true },
                    { "text": "你们好！ (Nǐmen hǎo!)", "correct": false },
                    { "text": "再见。 (Zàijiàn.)", "correct": false }
                ]
            },
            {
                "audioText": "再见。",
                "options": [
                    { "text": "大家好！ (Dàjiā hǎo!)", "correct": false },
                    { "text": "你好！ (Nǐ hǎo!)", "correct": false },
                    { "text": "再见。 (Zàijiàn.)", "correct": true }
                ]
            },
            {
                "audioText": "你们好！",
                "options": [
                    { "text": "你们好！ (Nǐmen hǎo!)", "correct": true },
                    { "text": "您好！ (Nín hǎo!)", "correct": false },
                    { "text": "再见。 (Zàijiàn.)", "correct": false }
                ]
            },
            {
                "audioText": "大家好！",
                "options": [
                    { "text": "你们好！ (Nǐmen hǎo!)", "correct": false },
                    { "text": "大家好！ (Dàjiā hǎo!)", "correct": true },
                    { "text": "您好！ (Nín hǎo!)", "correct": false }
                ]
            },
            {
                "audioText": "您好！",
                "options": [
                    { "text": "你好！ (Nǐ hǎo!)", "correct": false },
                    { "text": "您好！ (Nín hǎo!)", "correct": true },
                    { "text": "大家好！ (Dàjiā hǎo!)", "correct": false }
                ]
            },
            {
                "audioText": "谢谢。",
                "options": [
                    { "text": "对不起。 (Duìbuqǐ.)", "correct": false },
                    { "text": "没关系。 (Méi guānxi.)", "correct": false },
                    { "text": "谢谢。 (Xièxie.)", "correct": true }
                ]
            },
            {
                "audioText": "不客气。",
                "options": [
                    { "text": "再见。 (Zàijiàn.)", "correct": false },
                    { "text": "不客气。 (Bú kèqi.)", "correct": true },
                    { "text": "谢谢。 (Xièxie.)", "correct": false }
                ]
            },
            {
                "audioText": "对不起。",
                "options": [
                    { "text": "对不起。 (Duìbuqǐ.)", "correct": true },
                    { "text": "没关系。 (Méi guānxi.)", "correct": false },
                    { "text": "不客气。 (Bú kèqi.)", "correct": false }
                ]
            },
            {
                "audioText": "没关系。",
                "options": [
                    { "text": "再见。 (Zàijiàn.)", "correct": false },
                    { "text": "没关系。 (Méi guānxi.)", "correct": true },
                    { "text": "对不起。 (Duìbuqǐ.)", "correct": false }
                ]
            }
        ]
    },
    {
        "lesson": 2,
        "title": "회화 듣기 연습",
        "steps": [
            {
                "audioText": "你忙吗？",
                "options": [
                    { "text": "你累吗？ (Nǐ lèi ma?)", "correct": false },
                    { "text": "你忙吗？ (Nǐ máng ma?)", "correct": true },
                    { "text": "我很高。 (Wǒ hěn gāo.)", "correct": false }
                ]
            },
            {
                "audioText": "我很忙。",
                "options": [
                    { "text": "我很忙。 (Wǒ hěn máng.)", "correct": true },
                    { "text": "我不累。 (Wǒ bú lèi.)", "correct": false },
                    { "text": "我不高。 (Wǒ bù gāo.)", "correct": false }
                ]
            },
            {
                "audioText": "你累吗？",
                "options": [
                    { "text": "你忙吗？ (Nǐ máng ma?)", "correct": false },
                    { "text": "我很饿。 (Wǒ hěn è.)", "correct": false },
                    { "text": "你累吗？ (Nǐ lèi ma?)", "correct": true }
                ]
            },
            {
                "audioText": "我不累。",
                "options": [
                    { "text": "我不累。 (Wǒ bú lèi.)", "correct": true },
                    { "text": "我很忙。 (Wǒ hěn máng.)", "correct": false },
                    { "text": "我不饿。 (Wǒ bú è.)", "correct": false }
                ]
            },
            {
                "audioText": "高吗？ 很高。 不高。",
                "options": [
                    { "text": "高吗？ 很高。 不高。 (Gāo ma? Hěn gāo. Bù gāo.)", "correct": true },
                    { "text": "矮吗？ 很矮。 不矮。 (Ǎi ma? Hěn ǎi. Bù ǎi.)", "correct": false },
                    { "text": "渴吗？ 很渴。 不渴。 (Kě ma? Hěn kě. Bù kě.)", "correct": false }
                ]
            },
            {
                "audioText": "矮吗？ 很矮。 不矮。",
                "options": [
                    { "text": "高吗？ 很高。 不高。 (Gāo ma? Hěn gāo. Bù gāo.)", "correct": false },
                    { "text": "饿吗？ 很饿。 不饿。 (È ma? Hěn è. Bú è.)", "correct": false },
                    { "text": "矮吗？ 很矮。 不矮。 (Ǎi ma? Hěn ǎi. Bù ǎi.)", "correct": true }
                ]
            },
            {
                "audioText": "渴吗？ 很渴。 不渴。",
                "options": [
                    { "text": "累吗？ 很累。 不累。 (Lèi ma? Hěn lèi. Bú lèi.)", "correct": false },
                    { "text": "渴吗？ 很渴。 不渴。 (Kě ma? Hěn kě. Bù kě.)", "correct": true },
                    { "text": "矮吗？ 很矮。 不矮。 (Ǎi ma? Hěn ǎi. Bù ǎi.)", "correct": false }
                ]
            },
            {
                "audioText": "饿吗？ 很饿。 不饿。",
                "options": [
                    { "text": "渴吗？ 很渴。 不渴。 (Kě ma? Hěn kě. Bù kě.)", "correct": false },
                    { "text": "饿吗？ 很饿。 不饿。 (È ma? Hěn è. Bú è.)", "correct": true },
                    { "text": "忙吗？ 很忙。 不忙。 (Máng ma? Hěn máng. Bù máng.)", "correct": false }
                ]
            },
            {
                "audioText": "累吗？ 很累。 不累。",
                "options": [
                    { "text": "累吗？ 很累。 不累。 (Lèi ma? Hěn lèi. Bú lèi.)", "correct": true },
                    { "text": "饿吗？ 很饿。 不饿。 (È ma? Hěn è. Bú è.)", "correct": false },
                    { "text": "高吗？ 很高。 不高。 (Gāo ma? Hěn gāo. Bù gāo.)", "correct": false }
                ]
            }
        ]
    },
    {
        "lesson": 3,
        "title": "회화 듣기 연습",
        "steps": [
            {
                "audioText": "你看吗？",
                "options": [
                    { "text": "你看吗？ (Nǐ kàn ma?)", "correct": true },
                    { "text": "我不看。 (Wǒ bú kàn.)", "correct": false },
                    { "text": "她看不看？ (Tā kàn bu kàn?)", "correct": false }
                ]
            },
            {
                "audioText": "我不看。",
                "options": [
                    { "text": "他不听。 (Tā bù tīng.)", "correct": false },
                    { "text": "你看吗？ (Nǐ kàn ma?)", "correct": false },
                    { "text": "我不看。 (Wǒ bú kàn.)", "correct": true }
                ]
            },
            {
                "audioText": "他看不看？",
                "options": [
                    { "text": "他看不看？ (Tā kàn bu kàn?)", "correct": true },
                    { "text": "他也不看。 (Tā yě bú kàn.)", "correct": false },
                    { "text": "我不看。 (Wǒ bú kàn.)", "correct": false }
                ]
            },
            {
                "audioText": "他也不看。",
                "options": [
                    { "text": "他也不看。 (Tā yě bú kàn.)", "correct": true },
                    { "text": "我不来。 (Wǒ bù lái.)", "correct": false },
                    { "text": "他看不看？ (Tā kàn bu kàn?)", "correct": false }
                ]
            },
            {
                "audioText": "听不听？",
                "options": [
                    { "text": "看不看？ (Kàn bu kàn?)", "correct": false },
                    { "text": "听不听？ (Tīng bu tīng?)", "correct": true },
                    { "text": "买不买？ (Mǎi bu mǎi?)", "correct": false }
                ]
            },
            {
                "audioText": "不来。",
                "options": [
                    { "text": "不给。 (Bù gěi.)", "correct": false },
                    { "text": "不买。 (Bù mǎi.)", "correct": false },
                    { "text": "不来。 (Bù lái.)", "correct": true }
                ]
            },
            {
                "audioText": "给她吗？",
                "options": [
                    { "text": "给她吗？ (Gěi tā ma?)", "correct": true },
                    { "text": "喝茶吗？ (Hē chá ma?)", "correct": false },
                    { "text": "买不买？ (Mǎi bu mǎi?)", "correct": false }
                ]
            },
            {
                "audioText": "喝不喝？",
                "options": [
                    { "text": "听不听？ (Tīng bu tīng?)", "correct": false },
                    { "text": "喝不喝？ (Hē bu hē?)", "correct": true },
                    { "text": "买不买？ (Mǎi bu mǎi?)", "correct": false }
                ]
            },
            {
                "audioText": "我不买。",
                "options": [
                    { "text": "他不喝。 (Tā bù hē.)", "correct": false },
                    { "text": "她不听。 (Tā bù tīng.)", "correct": false },
                    { "text": "我不买。 (Wǒ bù mǎi.)", "correct": true }
                ]
            }
        ]
    },
    {
        "lesson": 4,
        "title": "회화 듣기 연습",
        "steps": [
            {
                "audioText": "你是学生吗？",
                "options": [
                    { "text": "她也是学生吗？ (Tā yě shì xuésheng ma?)", "correct": false },
                    { "text": "我是学生。 (Wǒ shì xuésheng.)", "correct": false },
                    { "text": "你是学生吗？ (Nǐ shì xuésheng ma?)", "correct": true }
                ]
            },
            {
                "audioText": "是，我是学生。",
                "options": [
                    { "text": "是，我是学生。 (Shì, wǒ shì xuésheng.)", "correct": true },
                    { "text": "不是，我是学生。 (Bú shì, wǒ shì xuésheng.)", "correct": false },
                    { "text": "是，我是老师。 (Shì, wǒ shì lǎoshī.)", "correct": false }
                ]
            },
            {
                "audioText": "他们也是学生吗？",
                "options": [
                    { "text": "他们都是学生吗？ (Tāmen dōu shì xuésheng ma?)", "correct": false },
                    { "text": "他们也是学生吗？ (Tāmen yě shì xuésheng ma?)", "correct": true },
                    { "text": "你们也是学生吗？ (Nǐmen yě shì xuésheng ma?)", "correct": false }
                ]
            },
            {
                "audioText": "不是，他们都是老师。",
                "options": [
                    { "text": "不是，他们都是学生。 (Bú shì, tāmen dōu shì xuésheng.)", "correct": false },
                    { "text": "不是，他们都是老师。 (Bú shì, tāmen dōu shì lǎoshī.)", "correct": true },
                    { "text": "是，他们都是老师。 (Shì, tāmen dōu shì lǎoshī.)", "correct": false }
                ]
            },
            {
                "audioText": "我是老师。",
                "options": [
                    { "text": "我是老师。 (Wǒ shì lǎoshī.)", "correct": true },
                    { "text": "我不是老师。 (Wǒ bú shì lǎoshī.)", "correct": false }
                ]
            },
            {
                "audioText": "我不是老师。",
                "options": [
                    { "text": "我是老师。 (Wǒ shì lǎoshī.)", "correct": false },
                    { "text": "我不是老师。 (Wǒ bú shì lǎoshī.)", "correct": true }
                ]
            },
            {
                "audioText": "我是公司职员。",
                "options": [
                    { "text": "我是公司职员。 (Wǒ shì gōngsī zhíyuán.)", "correct": true },
                    { "text": "我不是公司职员。 (Wǒ bú shì gōngsī zhíyuán.)", "correct": false }
                ]
            },
            {
                "audioText": "我不是公司职员。",
                "options": [
                    { "text": "我是公司职员。 (Wǒ shì gōngsī zhíyuán.)", "correct": false },
                    { "text": "我不是公司职员。 (Wǒ bú shì gōngsī zhíyuán.)", "correct": true }
                ]
            },
            {
                "audioText": "我是韩国人。",
                "options": [
                    { "text": "我是韩国人。 (Wǒ shì Hánguórén.)", "correct": true },
                    { "text": "我是中国人。 (Wǒ shì Zhōngguórén.)", "correct": false },
                    { "text": "我是美国人。 (Wǒ shì Měiguórén.)", "correct": false }
                ]
            },
            {
                "audioText": "我不是韩国人。",
                "options": [
                    { "text": "我是韩国人。 (Wǒ shì Hánguórén.)", "correct": false },
                    { "text": "我不是韩国人。 (Wǒ bú shì Hánguórén.)", "correct": true }
                ]
            },
            {
                "audioText": "我是中国人。",
                "options": [
                    { "text": "我是韩国人。 (Wǒ shì Hánguórén.)", "correct": false },
                    { "text": "我是中国人。 (Wǒ shì Zhōngguórén.)", "correct": true },
                    { "text": "我是美国人。 (Wǒ shì Měiguórén.)", "correct": false }
                ]
            },
            {
                "audioText": "我不是中国人。",
                "options": [
                    { "text": "我是中国人。 (Wǒ shì Zhōngguórén.)", "correct": false },
                    { "text": "我不是中国人。 (Wǒ bú shì Zhōngguórén.)", "correct": true }
                ]
            },
            {
                "audioText": "我是美国人。",
                "options": [
                    { "text": "我是中国人。 (Wǒ shì Zhōngguórén.)", "correct": false },
                    { "text": "我不是美国人。 (Wǒ bú shì Měiguórén.)", "correct": false },
                    { "text": "我是美国人。 (Wǒ shì Měiguórén.)", "correct": true }
                ]
            },
            {
                "audioText": "我不是美国人。",
                "options": [
                    { "text": "我不是美国人。 (Wǒ bú shì Měiguórén.)", "correct": true },
                    { "text": "我是美国人。 (Wǒ shì Měiguórén.)", "correct": false }
                ]
            }
        ]
    },
    {
        "lesson": 5,
        "title": "회화 듣기 연습",
        "steps": [
            {
                "audioText": "我很饿。",
                "options": [
                    { "text": "我很忙。 (Wǒ hěn máng.)", "correct": false },
                    { "text": "我很饿。 (Wǒ hěn è.)", "correct": true },
                    { "text": "我不饿。 (Wǒ bú è.)", "correct": false }
                ]
            },
            {
                "audioText": "我们吃比萨。",
                "options": [
                    { "text": "他们吃汉堡包。 (Tāmen chī hànbǎobāo.)", "correct": false },
                    { "text": "我们喝咖啡。 (Wǒmen hē kāfēi.)", "correct": false },
                    { "text": "我们吃比萨。 (Wǒmen chī bǐsà.)", "correct": true }
                ]
            },
            {
                "audioText": "你喝咖啡吗？",
                "options": [
                    { "text": "你喝咖啡吗？ (Nǐ hē kāfēi ma?)", "correct": true },
                    { "text": "我喝可乐吗？ (Wǒ hē kělè ma?)", "correct": false },
                    { "text": "你吃比萨吗？ (Nǐ chī bǐsà ma?)", "correct": false }
                ]
            },
            {
                "audioText": "不，我喝可乐。",
                "options": [
                    { "text": "是，我喝可乐。 (Shì, wǒ hē kělè.)", "correct": false },
                    { "text": "不，我喝可乐。 (Bù, wǒ hē kělè.)", "correct": true },
                    { "text": "不，我喝牛奶。 (Bù, wǒ hē niúnǎi.)", "correct": false }
                ]
            },
            {
                "audioText": "我吃面包。",
                "options": [
                    { "text": "我吃香蕉。 (Wǒ chī xiāngjiāo.)", "correct": false },
                    { "text": "我吃面包。 (Wǒ chī miànbāo.)", "correct": true },
                    { "text": "他吃面包。 (Tā chī miànbāo.)", "correct": false }
                ]
            },
            {
                "audioText": "我吃香蕉。",
                "options": [
                    { "text": "我吃香蕉。 (Wǒ chī xiāngjiāo.)", "correct": true },
                    { "text": "我喝牛奶。 (Wǒ hē niúnǎi.)", "correct": false },
                    { "text": "我吃比萨。 (Wǒ chī bǐsà.)", "correct": false }
                ]
            },
            {
                "audioText": "我吃汉堡包。",
                "options": [
                    { "text": "我喝咖啡。 (Wǒ hē kāfēi.)", "correct": false },
                    { "text": "我吃小笼包。 (Wǒ chī xiǎolóngbāo.)", "correct": false },
                    { "text": "我吃汉堡包。 (Wǒ chī hànbǎobāo.)", "correct": true }
                ]
            },
            {
                "audioText": "我喝牛奶。",
                "options": [
                    { "text": "我喝啤酒。 (Wǒ hē píjiǔ.)", "correct": false },
                    { "text": "我喝牛奶。 (Wǒ hē niúnǎi.)", "correct": true },
                    { "text": "我喝奶茶。 (Wǒ hē nǎichá.)", "correct": false }
                ]
            },
            {
                "audioText": "我喝啤酒。",
                "options": [
                    { "text": "我喝啤酒。 (Wǒ hē píjiǔ.)", "correct": true },
                    { "text": "我喝果汁。 (Wǒ hē guǒzhī.)", "correct": false },
                    { "text": "他喝水。 (Tā hē shuǐ.)", "correct": false }
                ]
            },
            {
                "audioText": "我吃三明治。",
                "options": [
                    { "text": "我吃冰淇淋。 (Wǒ chī bīngqílín.)", "correct": false },
                    { "text": "我吃三明治。 (Wǒ chī sānmíngzhì.)", "correct": true },
                    { "text": "我吃炸鸡。 (Wǒ chī zhájī.)", "correct": false }
                ]
            },
            {
                "audioText": "我吃炸鸡。",
                "options": [
                    { "text": "我吃炸鸡。 (Wǒ chī zhájī.)", "correct": true },
                    { "text": "我吃比萨。 (Wǒ chī bǐsà.)", "correct": false },
                    { "text": "我喝茶。 (Wǒ hē chá.)", "correct": false }
                ]
            }
        ]
    },
    {
        "lesson": 6,
        "title": "회화 듣기 연습",
        "steps": [
            {
                "audioText": "这是什么？",
                "options": [
                    { "text": "这是什么？ (Zhè shì shénme?)", "correct": true },
                    { "text": "那是什么？ (Nà shì shénme?)", "correct": false },
                    { "text": "这是书吗？ (Zhè shì shū ma?)", "correct": false }
                ]
            },
            {
                "audioText": "这是书。",
                "options": [
                    { "text": "那是书。 (Nà shì shū.)", "correct": false },
                    { "text": "这是本子。 (Zhè shì běnzi.)", "correct": false },
                    { "text": "这是书。 (Zhè shì shū.)", "correct": true }
                ]
            },
            {
                "audioText": "那是什么？",
                "options": [
                    { "text": "这是什么？ (Zhè shì shénme?)", "correct": false },
                    { "text": "那是本子。 (Nà shì běnzi.)", "correct": false },
                    { "text": "那是什么？ (Nà shì shénme?)", "correct": true }
                ]
            },
            {
                "audioText": "那是本子。",
                "options": [
                    { "text": "这是本子。 (Zhè shì běnzi.)", "correct": false },
                    { "text": "那是本子。 (Nà shì běnzi.)", "correct": true },
                    { "text": "那是水。 (Nà shì shuǐ.)", "correct": false }
                ]
            },
            {
                "audioText": "这是杯子。",
                "options": [
                    { "text": "这是筷子。 (Zhè shì kuàizi.)", "correct": false },
                    { "text": "这是橘子。 (Zhè shì júzi.)", "correct": false },
                    { "text": "这是杯子。 (Zhè shì bēizi.)", "correct": true }
                ]
            },
            {
                "audioText": "这是筷子。",
                "options": [
                    { "text": "这是筷子。 (Zhè shì kuàizi.)", "correct": true },
                    { "text": "那是筷子。 (Nà shì kuàizi.)", "correct": false },
                    { "text": "这是杯子。 (Zhè shì bēizi.)", "correct": false }
                ]
            },
            {
                "audioText": "这是水果。",
                "options": [
                    { "text": "那是水果。 (Nà shì shuǐguǒ.)", "correct": false },
                    { "text": "这是水。 (Zhè shì shuǐ.)", "correct": false },
                    { "text": "这是水果。 (Zhè shì shuǐguǒ.)", "correct": true }
                ]
            },
            {
                "audioText": "那是娃娃。",
                "options": [
                    { "text": "这是娃娃。 (Zhè shì wáwa.)", "correct": false },
                    { "text": "那是娃娃。 (Nà shì wáwa.)", "correct": true },
                    { "text": "那是西瓜。 (Nà shì xīguā.)", "correct": false }
                ]
            },
            {
                "audioText": "那是袜子。",
                "options": [
                    { "text": "那是衣服。 (Nà shì yīfu.)", "correct": false },
                    { "text": "那是鞋子。 (Nà shì xiézi.)", "correct": false },
                    { "text": "那是袜子。 (Nà shì wàzi.)", "correct": true }
                ]
            },
            {
                "audioText": "那是衣服。",
                "options": [
                    { "text": "这是衣服。 (Zhè shì yīfu.)", "correct": false },
                    { "text": "那是书包。 (Nà shì shūbāo.)", "correct": false },
                    { "text": "那是衣服。 (Nà shì yīfu.)", "correct": true }
                ]
            },
            {
                "audioText": "那是书包。",
                "options": [
                    { "text": "那是书。 (Nà shì shū.)", "correct": false },
                    { "text": "这是书包。 (Zhè shì shūbāo.)", "correct": false },
                    { "text": "那是书包。 (Nà shì shūbāo.)", "correct": true }
                ]
            },
            {
                "audioText": "这是西瓜。",
                "options": [
                    { "text": "那是西瓜。 (Nà shì xīguā.)", "correct": false },
                    { "text": "这是西瓜。 (Zhè shì xīguā.)", "correct": true },
                    { "text": "这是草莓。 (Zhè shì cǎoméi.)", "correct": false }
                ]
            },
            {
                "audioText": "这是苹果。",
                "options": [
                    { "text": "这是苹果。 (Zhè shì píngguǒ.)", "correct": true },
                    { "text": "那是苹果。 (Nà shì píngguǒ.)", "correct": false },
                    { "text": "这是橘子。 (Zhè shì júzi.)", "correct": false }
                ]
            }
        ]
    },
    {
        "lesson": 7,
        "title": "회화 듣기 연습",
        "steps": [
            {
                "audioText": "你去哪儿？",
                "options": [
                    { "text": "哥哥在哪儿？ (Gēge zài nǎr?)", "correct": false },
                    { "text": "你去哪儿？ (Nǐ qù nǎr?)", "correct": true },
                    { "text": "她在公司。 (Tā zài gōngsī.)", "correct": false }
                ]
            },
            {
                "audioText": "我去学校。",
                "options": [
                    { "text": "哥哥在学校。 (Gēge zài xuéxiào.)", "correct": false },
                    { "text": "我去学校。 (Wǒ qù xuéxiào.)", "correct": true },
                    { "text": "他在公司。 (Tā zài gōngsī.)", "correct": false }
                ]
            },
            {
                "audioText": "哥哥在哪儿？",
                "options": [
                    { "text": "你去哪儿？ (Nǐ qù nǎr?)", "correct": false },
                    { "text": "哥哥在哪儿？ (Gēge zài nǎr?)", "correct": true },
                    { "text": "弟弟在哪儿？ (Dìdi zài nǎr?)", "correct": false }
                ]
            },
            {
                "audioText": "他在公司。",
                "options": [
                    { "text": "他在公司。 (Tā zài gōngsī.)", "correct": true },
                    { "text": "他在学校。 (Tā zài xuéxiào.)", "correct": false },
                    { "text": "我去公司。 (Wǒ qù gōngsī.)", "correct": false }
                ]
            },
            {
                "audioText": "我去图书馆。",
                "options": [
                    { "text": "我去学校。 (Wǒ qù xuéxiào.)", "correct": false },
                    { "text": "我去银行。 (Wǒ qù yínháng.)", "correct": false },
                    { "text": "我去图书馆。 (Wǒ qù túshūguǎn.)", "correct": true }
                ]
            },
            {
                "audioText": "我在图书馆。",
                "options": [
                    { "text": "我在图书馆。 (Wǒ zài túshūguǎn.)", "correct": true },
                    { "text": "你在公司。 (Nǐ zài gōngsī.)", "correct": false },
                    { "text": "妹妹在学校。 (Mèimei zài xuéxiào.)", "correct": false }
                ]
            },
            {
                "audioText": "我去银行。",
                "options": [
                    { "text": "我在超市。 (Wǒ zài chāoshì.)", "correct": false },
                    { "text": "我去饭馆儿。 (Wǒ qù fànguǎnr.)", "correct": false },
                    { "text": "我去银行。 (Wǒ qù yínháng.)", "correct": true }
                ]
            },
            {
                "audioText": "我在银行。",
                "options": [
                    { "text": "我在超市。 (Wǒ zài chāoshì.)", "correct": false },
                    { "text": "我在银行。 (Wǒ zài yínháng.)", "correct": true },
                    { "text": "我去医院。 (Wǒ qù yīyuàn.)", "correct": false }
                ]
            },
            {
                "audioText": "我去医院。",
                "options": [
                    { "text": "我去医院。 (Wǒ qù yīyuàn.)", "correct": true },
                    { "text": "他在医院。 (Tā zài yīyuàn.)", "correct": false },
                    { "text": "我去超市。 (Wǒ qù chāoshì.)", "correct": false }
                ]
            },
            {
                "audioText": "我在医院。",
                "options": [
                    { "text": "她在饭馆儿。 (Tā zài fànguǎnr.)", "correct": false },
                    { "text": "我在医院。 (Wǒ zài yīyuàn.)", "correct": true },
                    { "text": "你去超市。 (Nǐ qù chāoshì.)", "correct": false }
                ]
            },
            {
                "audioText": "我去超市。",
                "options": [
                    { "text": "我去图书馆。 (Wǒ qù túshūguǎn.)", "correct": false },
                    { "text": "我去超市。 (Wǒ qù chāoshì.)", "correct": true },
                    { "text": "他在超市。 (Tā zài chāoshì.)", "correct": false }
                ]
            },
            {
                "audioText": "我在超市。",
                "options": [
                    { "text": "我去银行。 (Wǒ qù yínháng.)", "correct": false },
                    { "text": "她在医院。 (Tā zài yīyuàn.)", "correct": false },
                    { "text": "我在超市。 (Wǒ zài chāoshì.)", "correct": true }
                ]
            },
            {
                "audioText": "我去饭馆儿。",
                "options": [
                    { "text": "我在饭馆儿。 (Wǒ zài fànguǎnr.)", "correct": false },
                    { "text": "她去银行。 (Tā qù yínháng.)", "correct": false },
                    { "text": "我去饭馆儿。 (Wǒ qù fànguǎnr.)", "correct": true }
                ]
            },
            {
                "audioText": "我在饭馆儿。",
                "options": [
                    { "text": "我在饭馆儿。 (Wǒ zài fànguǎnr.)", "correct": true },
                    { "text": "哥哥在超市。 (Gēge zài chāoshì.)", "correct": false },
                    { "text": "我去图书馆。 (Wǒ qù túshūguǎn.)", "correct": false }
                ]
            }
        ]
    },
    {
        "lesson": 8,
        "title": "회화 듣기 연습",
        "steps": [
            {
                "audioText": "你有女朋友吗？",
                "options": [
                    { "text": "她有男朋友吗？ (Tā yǒu nánpéngyou ma?)", "correct": false },
                    { "text": "你有女朋友吗？ (Nǐ yǒu nǚpéngyou ma?)", "correct": true },
                    { "text": "我没有女朋友。 (Wǒ méiyǒu nǚpéngyou.)", "correct": false }
                ]
            },
            {
                "audioText": "我没有女朋友。",
                "options": [
                    { "text": "我没有女朋友。 (Wǒ méiyǒu nǚpéngyou.)", "correct": true },
                    { "text": "我有男朋友。 (Wǒ yǒu nánpéngyou.)", "correct": false },
                    { "text": "你有男朋友吗？ (Nǐ yǒu nánpéngyou ma?)", "correct": false }
                ]
            },
            {
                "audioText": "你有没有男朋友？",
                "options": [
                    { "text": "你有男朋友吗？ (Nǐ yǒu nánpéngyou ma?)", "correct": false },
                    { "text": "你有没有男朋友？ (Nǐ yǒu méiyǒu nánpéngyou?)", "correct": true },
                    { "text": "她有没有男朋友？ (Tā yǒu méiyǒu nánpéngyou?)", "correct": false }
                ]
            },
            {
                "audioText": "我有男朋友。",
                "options": [
                    { "text": "我没有女朋友。 (Wǒ méiyǒu nǚpéngyou.)", "correct": false },
                    { "text": "我有男朋友。 (Wǒ yǒu nánpéngyou.)", "correct": true },
                    { "text": "你有男朋友。 (Nǐ yǒu nánpéngyou.)", "correct": false }
                ]
            },
            {
                "audioText": "有床。",
                "options": [
                    { "text": "有床。 (Yǒu chuáng.)", "correct": true },
                    { "text": "没有床。 (Méiyǒu chuáng.)", "correct": false },
                    { "text": "有桌子。 (Yǒu zhuōzi.)", "correct": false }
                ]
            },
            {
                "audioText": "没有床。",
                "options": [
                    { "text": "有床。 (Yǒu chuáng.)", "correct": false },
                    { "text": "没有床。 (Méiyǒu chuáng.)", "correct": true },
                    { "text": "没有桌子。 (Méiyǒu zhuōzi.)", "correct": false }
                ]
            },
            {
                "audioText": "有桌子。",
                "options": [
                    { "text": "没有椅子。 (Méiyǒu yǐzi.)", "correct": false },
                    { "text": "有床。 (Yǒu chuáng.)", "correct": false },
                    { "text": "有桌子。 (Yǒu zhuōzi.)", "correct": true }
                ]
            },
            {
                "audioText": "没有桌子。",
                "options": [
                    { "text": "没有椅子。 (Méiyǒu yǐzi.)", "correct": false },
                    { "text": "没有桌子。 (Méiyǒu zhuōzi.)", "correct": true },
                    { "text": "有桌子。 (Yǒu zhuōzi.)", "correct": false }
                ]
            },
            {
                "audioText": "有椅子。",
                "options": [
                    { "text": "没有电视。 (Méiyǒu diànshì.)", "correct": false },
                    { "text": "有椅子。 (Yǒu yǐzi.)", "correct": true },
                    { "text": "有桌子。 (Yǒu zhuōzi.)", "correct": false }
                ]
            },
            {
                "audioText": "没有椅子。",
                "options": [
                    { "text": "没有椅子。 (Méiyǒu yǐzi.)", "correct": true },
                    { "text": "没有床。 (Méiyǒu chuáng.)", "correct": false },
                    { "text": "有椅子。 (Yǒu yǐzi.)", "correct": false }
                ]
            },
            {
                "audioText": "有电视。",
                "options": [
                    { "text": "没有电脑。 (Méiyǒu diànnǎo.)", "correct": false },
                    { "text": "有电脑。 (Yǒu diànnǎo.)", "correct": false },
                    { "text": "有电视。 (Yǒu diànshì.)", "correct": true }
                ]
            },
            {
                "audioText": "没有电视。",
                "options": [
                    { "text": "有电视。 (Yǒu diànshì.)", "correct": false },
                    { "text": "没有电脑。 (Méiyǒu diànnǎo.)", "correct": false },
                    { "text": "没有电视。 (Méiyǒu diànshì.)", "correct": true }
                ]
            },
            {
                "audioText": "有电脑。",
                "options": [
                    { "text": "没有电脑。 (Méiyǒu diànnǎo.)", "correct": false },
                    { "text": "有电视。 (Yǒu diànshì.)", "correct": false },
                    { "text": "有电脑。 (Yǒu diànnǎo.)", "correct": true }
                ]
            },
            {
                "audioText": "没有电脑。",
                "options": [
                    { "text": "没有电脑。 (Méiyǒu diànnǎo.)", "correct": true },
                    { "text": "没有电视。 (Méiyǒu diànshì.)", "correct": false },
                    { "text": "有电脑。 (Yǒu diànnǎo.)", "correct": false }
                ]
            },
            {
                "audioText": "有空调。",
                "options": [
                    { "text": "没有空调。 (Méiyǒu kōngtiáo.)", "correct": false },
                    { "text": "有手机。 (Yǒu shǒujī.)", "correct": false },
                    { "text": "有空调。 (Yǒu kōngtiáo.)", "correct": true }
                ]
            },
            {
                "audioText": "没有空调。",
                "options": [
                    { "text": "没有手机。 (Méiyǒu shǒujī.)", "correct": false },
                    { "text": "没有空调。 (Méiyǒu kōngtiáo.)", "correct": true },
                    { "text": "有空调。 (Yǒu kōngtiáo.)", "correct": false }
                ]
            },
            {
                "audioText": "有手机。",
                "options": [
                    { "text": "没有手机。 (Méiyǒu shǒujī.)", "correct": false },
                    { "text": "有电脑。 (Yǒu diànnǎo.)", "correct": false },
                    { "text": "有手机。 (Yǒu shǒujī.)", "correct": true }
                ]
            },
            {
                "audioText": "没有手机。",
                "options": [
                    { "text": "没有手机。 (Méiyǒu shǒujī.)", "correct": true },
                    { "text": "有手机。 (Yǒu shǒujī.)", "correct": false },
                    { "text": "没有电脑。 (Méiyǒu diànnǎo.)", "correct": false }
                ]
            }
        ]
    },
    {
        "lesson": 9,
        "title": "회화 듣기 연습",
        "steps": [
            {
                "audioText": "我去，你们也去吗？",
                "options": [
                    { "text": "我买，你们也买吗？ (Wǒ mǎi, nǐmen yě mǎi ma?)", "correct": false },
                    { "text": "我去，你们也去吗？ (Wǒ qù, nǐmen yě qù ma?)", "correct": true },
                    { "text": "他们去不去？ (Tāmen qù bu qù?)", "correct": false }
                ]
            },
            {
                "audioText": "我们都不去。",
                "options": [
                    { "text": "我们都不去。 (Wǒmen dōu bú qù.)", "correct": true },
                    { "text": "他们也都不去。 (Tāmen yě dōu bú qù.)", "correct": false },
                    { "text": "我们都不吃。 (Wǒmen dōu bù chī.)", "correct": false }
                ]
            },
            {
                "audioText": "他们去不去？",
                "options": [
                    { "text": "你们买不买？ (Nǐmen mǎi bu mǎi?)", "correct": false },
                    { "text": "你去哪儿？ (Nǐ qù nǎr?)", "correct": false },
                    { "text": "他们去不去？ (Tāmen qù bu qù?)", "correct": true }
                ]
            },
            {
                "audioText": "他们也都不去。",
                "options": [
                    { "text": "他们也都不吃。 (Tāmen yě dōu bù chī.)", "correct": false },
                    { "text": "他们也都不去。 (Tāmen yě dōu bú qù.)", "correct": true },
                    { "text": "我们也都不去。 (Wǒmen yě dōu bú qù.)", "correct": false }
                ]
            },
            {
                "audioText": "你们都吃吗？",
                "options": [
                    { "text": "我们都吃。 (Wǒmen dōu chī.)", "correct": false },
                    { "text": "他们都吃吗？ (Tāmen dōu chī ma?)", "correct": false },
                    { "text": "你们都吃吗？ (Nǐmen dōu chī ma?)", "correct": true }
                ]
            },
            {
                "audioText": "我们都吃。",
                "options": [
                    { "text": "我们都吃。 (Wǒmen dōu chī.)", "correct": true },
                    { "text": "他们都不吃。 (Tāmen dōu bù chī.)", "correct": false },
                    { "text": "我们都听。 (Wǒmen dōu tīng.)", "correct": false }
                ]
            },
            {
                "audioText": "你们都学吗？",
                "options": [
                    { "text": "他们都学吗？ (Tāmen dōu xué ma?)", "correct": false },
                    { "text": "你们都学吗？ (Nǐmen dōu xué ma?)", "correct": true },
                    { "text": "你们都买吗？ (Nǐmen dōu mǎi ma?)", "correct": false }
                ]
            },
            {
                "audioText": "我们都不学。",
                "options": [
                    { "text": "我们都不去。 (Wǒmen dōu bú qù.)", "correct": false },
                    { "text": "他们都不学。 (Tāmen dōu bù xué.)", "correct": false },
                    { "text": "我们都不学。 (Wǒmen dōu bù xué.)", "correct": true }
                ]
            },
            {
                "audioText": "你们买不买？",
                "options": [
                    { "text": "你们去不去？ (Nǐmen qù bu qù?)", "correct": false },
                    { "text": "你们买不买？ (Nǐmen mǎi bu mǎi?)", "correct": true },
                    { "text": "他们买不买？ (Tāmen mǎi bu mǎi?)", "correct": false }
                ]
            },
            {
                "audioText": "我不买，她也不买。",
                "options": [
                    { "text": "我不学，她也不学。 (Wǒ bù xué, tā yě bù xué.)", "correct": false },
                    { "text": "我不买，她也不买。 (Wǒ bù mǎi, tā yě bù mǎi.)", "correct": true },
                    { "text": "我不听，她也不听。 (Wǒ bù tīng, tā yě bù tīng.)", "correct": false }
                ]
            },
            {
                "audioText": "姐姐买，哥哥不买。",
                "options": [
                    { "text": "姐姐买，哥哥不买。 (Jiějie mǎi, gēge bù mǎi.)", "correct": true },
                    { "text": "弟弟吃，妹妹也吃。 (Dìdi chī, mèimei yě chī.)", "correct": false },
                    { "text": "姐姐不买，哥哥买。 (Jiějie bù mǎi, gēge mǎi.)", "correct": false }
                ]
            },
            {
                "audioText": "爷爷听，奶奶不听。",
                "options": [
                    { "text": "爷爷不听，奶奶听。 (Yéye bù tīng, nǎinai tīng.)", "correct": false },
                    { "text": "爷爷听，奶奶不听。 (Yéye tīng, nǎinai bù tīng.)", "correct": true },
                    { "text": "妈妈不喝，爸爸也不喝。 (Māma bù hē, bàba yě bù hē.)", "correct": false }
                ]
            },
            {
                "audioText": "弟弟吃，妹妹也吃。",
                "options": [
                    { "text": "我也吃。 (Wǒ yě chī.)", "correct": false },
                    { "text": "弟弟吃，妹妹不吃。 (Dìdi chī, mèimei bù chī.)", "correct": false },
                    { "text": "弟弟吃，妹妹也吃。 (Dìdi chī, mèimei yě chī.)", "correct": true }
                ]
            },
            {
                "audioText": "他们都吃。",
                "options": [
                    { "text": "他们都不吃。 (Tāmen dōu bù chī.)", "correct": false },
                    { "text": "我们都吃。 (Wǒmen dōu chī.)", "correct": false },
                    { "text": "他们都吃。 (Tāmen dōu chī.)", "correct": true }
                ]
            },
            {
                "audioText": "妈妈不喝，爸爸也不喝。",
                "options": [
                    { "text": "奶奶不看，爷爷也不看。 (Nǎinai bú kàn, yéye bú kàn.)", "correct": false },
                    { "text": "妈妈不喝，爸爸也不喝。 (Māma bù hē, bàba yě bù hē.)", "correct": true },
                    { "text": "妈妈喝，爸爸也喝。 (Māma hē, bàba yě hē.)", "correct": false }
                ]
            },
            {
                "audioText": "他们都不喝。",
                "options": [
                    { "text": "我们都不喝。 (Wǒmen dōu bù hē.)", "correct": false },
                    { "text": "他们都喝。 (Tāmen dōu hē.)", "correct": false },
                    { "text": "他们都不喝。 (Tāmen dōu bù hē.)", "correct": true }
                ]
            },
            {
                "audioText": "奶奶不看，爷爷也不看。",
                "options": [
                    { "text": "奶奶不看，爷爷也不看。 (Nǎinai bú kàn, yéye yě bú kàn.)", "correct": true },
                    { "text": "奶奶看，爷爷也看。 (Nǎinai kàn, yéye yě kàn.)", "correct": false },
                    { "text": "妈妈不喝，爸爸也不喝。 (Māma bù hē, bàba yě bù hē.)", "correct": false }
                ]
            },
            {
                "audioText": "他们都不看。",
                "options": [
                    { "text": "他们都不看。 (Tāmen dōu bú kàn.)", "correct": true },
                    { "text": "他们都看。 (Tāmen dōu kàn.)", "correct": false },
                    { "text": "我们都不看。 (Wǒmen dōu bú kàn.)", "correct": false }
                ]
            }
        ]
    },
    {
        "lesson": 10,
        "title": "회화 듣기 연습",
        "steps": [
            {
                "audioText": "这个贵不贵？",
                "options": [
                    { "text": "那个好不好看？ (Nàge hǎo bu hǎokàn?)", "correct": false },
                    { "text": "这个贵不贵？ (Zhège guì bu guì?)", "correct": true },
                    { "text": "哪个贵？ (Nǎge guì?)", "correct": false }
                ]
            },
            {
                "audioText": "这个不太贵。",
                "options": [
                    { "text": "这个非常贵。 (Zhège fēicháng guì.)", "correct": false },
                    { "text": "这个不太贵。 (Zhège bú tài guì.)", "correct": true },
                    { "text": "那个不太贵。 (Nàge bú tài guì.)", "correct": false }
                ]
            },
            {
                "audioText": "哪个好看？",
                "options": [
                    { "text": "哪个好吃？ (Nǎge hǎochī?)", "correct": false },
                    { "text": "哪个好喝？ (Nǎge hǎohē?)", "correct": false },
                    { "text": "哪个好看？ (Nǎge hǎokàn?)", "correct": true }
                ]
            },
            {
                "audioText": "那个最好看。",
                "options": [
                    { "text": "那个最好看。 (Nàge zuì hǎokàn.)", "correct": true },
                    { "text": "这个最好看。 (Zhège zuì hǎokàn.)", "correct": false },
                    { "text": "那个好看。 (Nàge hǎokàn.)", "correct": false }
                ]
            },
            {
                "audioText": "中国人多吗？",
                "options": [
                    { "text": "中国人多吗？ (Zhōngguórén duō ma?)", "correct": true },
                    { "text": "韩国人多吗？ (Hánguórén duō ma?)", "correct": false },
                    { "text": "中国人多。 (Zhōngguórén duō.)", "correct": false }
                ]
            },
            {
                "audioText": "中国人很多。",
                "options": [
                    { "text": "韩国人很多。 (Hánguórén hěn duō.)", "correct": false },
                    { "text": "中国人非常多。 (Zhōngguórén fēicháng duō.)", "correct": false },
                    { "text": "中国人很多。 (Zhōngguórén hěn duō.)", "correct": true }
                ]
            },
            {
                "audioText": "你困不困？",
                "options": [
                    { "text": "你饿不饿？ (Nǐ è bu è?)", "correct": false },
                    { "text": "你困不困？ (Nǐ kùn bu kùn?)", "correct": true },
                    { "text": "他困不困？ (Tā kùn bu kùn?)", "correct": false }
                ]
            },
            {
                "audioText": "我不太困。",
                "options": [
                    { "text": "我不太饿。 (Wǒ bú tài è.)", "correct": false },
                    { "text": "我不太困。 (Wǒ bú tài kùn.)", "correct": true },
                    { "text": "我很困。 (Wǒ hěn kùn.)", "correct": false }
                ]
            },
            {
                "audioText": "这个好吃吗？",
                "options": [
                    { "text": "这个好喝吗？ (Zhège hǎohē ma?)", "correct": false },
                    { "text": "那个好吃吗？ (Nàge hǎochī ma?)", "correct": false },
                    { "text": "这个好吃吗？ (Zhège hǎochī ma?)", "correct": true }
                ]
            },
            {
                "audioText": "这个非常好吃。",
                "options": [
                    { "text": "这个非常好吃。 (Zhège fēicháng hǎochī.)", "correct": true },
                    { "text": "这个非常贵。 (Zhège fēicháng guì.)", "correct": false },
                    { "text": "那个非常好吃。 (Nàge fēicháng hǎochī.)", "correct": false }
                ]
            },
            {
                "audioText": "哪个贵？",
                "options": [
                    { "text": "那个贵。 (Nàge guì.)", "correct": false },
                    { "text": "这个太贵。 (Zhè太贵。）", "correct": false },
                    { "text": "哪个贵？ (Nǎge guì?)", "correct": true }
                ]
            },
            {
                "audioText": "手机非常贵，本子不贵。",
                "options": [
                    { "text": "书非常贵，本子不贵。 (Shū fēicháng guì, běnzi bú guì.)", "correct": false },
                    { "text": "手机非常贵，本子不贵。 (Shǒujī fēicháng guì, běnzi bú guì.)", "correct": true },
                    { "text": "手机不贵，本子非常贵。 (Shǒujī bú guì, běnzi fēicháng guì.)", "correct": false }
                ]
            },
            {
                "audioText": "哪个好吃？",
                "options": [
                    { "text": "哪个好喝？ (Nǎge hǎohē?)", "correct": false },
                    { "text": "哪个好看？ (Nǎge hǎokàn?)", "correct": false },
                    { "text": "哪个好吃？ (Nǎge hǎochī?)", "correct": true }
                ]
            },
            {
                "audioText": "面包很好吃，比萨不太好吃。",
                "options": [
                    { "text": "面包很好吃，比萨不好吃。 (Miànbāo hěn hǎochī, bǐsà bù hǎochī.)", "correct": false },
                    { "text": "面包不太好吃，比萨很好吃。 (Miànbāo bú tài hǎochī, bǐsà hěn hǎochī.)", "correct": false },
                    { "text": "面包很好吃，比萨不太好吃。 (Miànbāo hěn hǎochī, bǐsà bú tài hǎochī.)", "correct": true }
                ]
            },
            {
                "audioText": "他们都饿吗？",
                "options": [
                    { "text": "我们都饿吗？ (Wǒmen dōu è ma?)", "correct": false },
                    { "text": "他们都困吗？ (Tāmen dōu kùn ma?)", "correct": false },
                    { "text": "他们都饿吗？ (Tāmen dōu è ma?)", "correct": true }
                ]
            },
            {
                "audioText": "弟弟非常饿，妹妹不饿。",
                "options": [
                    { "text": "哥哥非常饿，妹妹不饿。 (Gēge fēicháng è, mèimei bú è.)", "correct": false },
                    { "text": "弟弟非常饿，妹妹不饿。 (Dìdi fēicháng è, mèimei bú è.)", "correct": true },
                    { "text": "弟弟不饿，妹妹非常饿。 (Dìdi bú è, mèimei fēicháng è.)", "correct": false }
                ]
            },
            {
                "audioText": "他们都困吗？",
                "options": [
                    { "text": "他们都困吗？ (Tāmen dōu kùn ma?)", "correct": true },
                    { "text": "你们都困吗？ (Nǐmen dōu kùn ma?)", "correct": false },
                    { "text": "他们都饿吗？ (Tāmen dōu è ma?)", "correct": false }
                ]
            },
            {
                "audioText": "学生很困，老师也很困。",
                "options": [
                    { "text": "学生很困，老师也很困。 (Xuéshēng hěn kùn, lǎoshī yě hěn kùn.)", "correct": true },
                    { "text": "学生很困，老师不困。 (Xuéshēng hěn kùn, lǎoshī bú kùn.)", "correct": false },
                    { "text": "学生不困，老师很困。 (Xuéshēng bú kùn, lǎoshī hěn kùn.)", "correct": false }
                ]
            },
            {
                "audioText": "哪个好喝？",
                "options": [
                    { "text": "哪个好吃？ (Nǎge hǎochī?)", "correct": false },
                    { "text": "哪个好喝？ (Nǎge hǎohē?)", "correct": true },
                    { "text": "哪个好看？ (Nǎge hǎokàn?)", "correct": false }
                ]
            },
            {
                "audioText": "啤酒不太好喝，咖啡也不太好喝。",
                "options": [
                    { "text": "啤酒很好喝，咖啡也很好喝。 (Píjiǔ hěn hǎohē, kāfēi yě hěn hǎohē.)", "correct": false },
                    { "text": "啤酒不太好喝，可乐也不太好喝。 (Píjiǔ bú tài hǎohē, kělè yě bú tài hǎohē.)", "correct": false },
                    { "text": "啤酒不太好喝，咖啡也不太好喝。 (Píjiǔ bú tài hǎohē, kāfēi yě bú tài hǎohē.)", "correct": true }
                ]
            }
        ]
    },
    {
        "lesson": 11,
        "title": "회화 듣기 연습",
        "steps": [
            {
                "audioText": "你学什么？",
                "options": [
                    { "text": "你买什么？ (Nǐ mǎi shénme?)", "correct": false },
                    { "text": "你学什么？ (Nǐ xué shénme?)", "correct": true },
                    { "text": "他写什么？ (Tā xiě shénme?)", "correct": false }
                ]
            },
            {
                "audioText": "我学汉语。",
                "options": [
                    { "text": "我买蛋糕。 (Wǒ mǎi dàngāo.)", "correct": false },
                    { "text": "我学韩语。 (Wǒ xué Hányǔ.)", "correct": false },
                    { "text": "我学汉语。 (Wǒ xué Hànyǔ.)", "correct": true }
                ]
            },
            {
                "audioText": "汉语怎么样？",
                "options": [
                    { "text": "韩语怎么样？ (Hányǔ zěnmeyàng?)", "correct": false },
                    { "text": "汉语怎么样？ (Hànyǔ zěnmeyàng?)", "correct": true },
                    { "text": "蛋糕怎么样？ (Dàngāo zěnmeyàng?)", "correct": false }
                ]
            },
            {
                "audioText": "很有意思。",
                "options": [
                    { "text": "很有意思。 (Hěn yǒu yìsi.)", "correct": true },
                    { "text": "没有意思。 (Méi yǒu yìsi.)", "correct": false },
                    { "text": "很好吃。 (Hěn hǎochī.)", "correct": false }
                ]
            },
            {
                "audioText": "你买什么？",
                "options": [
                    { "text": "你学什么？ (Nǐ xué shénme?)", "correct": false },
                    { "text": "你买什么？ (Nǐ mǎi shénme?)", "correct": true },
                    { "text": "他写什么？ (Tā xiě shénme?)", "correct": false }
                ]
            },
            {
                "audioText": "我买蛋糕。",
                "options": [
                    { "text": "我学汉语。 (Wǒ xué Hànyǔ.)", "correct": false },
                    { "text": "我买蛋糕。 (Wǒ mǎi dàngāo.)", "correct": true },
                    { "text": "他写汉字。 (Tā xiě Hànzì.)", "correct": false }
                ]
            },
            {
                "audioText": "他写什么？",
                "options": [
                    { "text": "你学什么？ (Nǐ xué shénme?)", "correct": false },
                    { "text": "他写什么？ (Tā xiě shénme?)", "correct": true },
                    { "text": "姐姐买什么？ (Jiějie mǎi shénme?)", "correct": false }
                ]
            },
            {
                "audioText": "他写汉字。",
                "options": [
                    { "text": "他写汉字。 (Tā xiě Hànzì.)", "correct": true },
                    { "text": "我买蛋糕。 (Wǒ mǎi dàngāo.)", "correct": false },
                    { "text": "哥哥买衣服。 (Gēge mǎi yīfu.)", "correct": false }
                ]
            },
            {
                "audioText": "妈妈做菜吗？",
                "options": [
                    { "text": "妈妈做菜吗？ (Māma zuò cài ma?)", "correct": true },
                    { "text": "爸爸看电视吗？ (Bàba kàn diànshì ma?)", "correct": false },
                    { "text": "姐姐吃饭吗？ (Jiějie chī fàn ma?)", "correct": false }
                ]
            },
            {
                "audioText": "妈妈做菜。",
                "options": [
                    { "text": "爸爸看电视。 (Bàba kàn diànshì.)", "correct": false },
                    { "text": "妈妈做菜。 (Māma zuò cài.)", "correct": true },
                    { "text": "爸爸不看电视。 (Bàba bú kàn diànshì.)", "correct": false }
                ]
            },
            {
                "audioText": "爸爸看电视吗？",
                "options": [
                    { "text": "妈妈做菜吗？ (Māma zuò cài ma?)", "correct": false },
                    { "text": "爸爸看电视吗？ (Bàba kàn diànshì ma?)", "correct": true },
                    { "text": "哥哥喝茶吗？ (Gēge hē chá ma?)", "correct": false }
                ]
            },
            {
                "audioText": "爸爸不看电视。",
                "options": [
                    { "text": "妈妈做菜。 (Māma zuò cài.)", "correct": false },
                    { "text": "爸爸看电视。 (Bàba kàn diànshì.)", "correct": false },
                    { "text": "爸爸不看电视。 (Bàba bú kàn diànshì.)", "correct": true }
                ]
            },
            {
                "audioText": "姐姐吃饭吗？",
                "options": [
                    { "text": "姐姐吃饭吗？ (Jiějie chī fàn ma?)", "correct": true },
                    { "text": "哥哥喝茶吗？ (Gēge hē chá ma?)", "correct": false },
                    { "text": "妈妈做菜吗？ (Māma zuò cài ma?)", "correct": false }
                ]
            },
            {
                "audioText": "姐姐吃饭。",
                "options": [
                    { "text": "姐姐吃饭。 (Jiějie chī fàn.)", "correct": true },
                    { "text": "哥哥喝茶。 (Gēge hē chá.)", "correct": false },
                    { "text": "哥哥不喝茶。 (Gēge bù hē chá.)", "correct": false }
                ]
            },
            {
                "audioText": "哥哥喝茶吗？",
                "options": [
                    { "text": "姐姐吃饭吗？ (Jiějie chī fàn ma?)", "correct": false },
                    { "text": "爸爸看电视吗？ (Bàba kàn diànshì ma?)", "correct": false },
                    { "text": "哥哥喝茶吗？ (Gēge hē chá ma?)", "correct": true }
                ]
            },
            {
                "audioText": "哥哥不喝茶。",
                "options": [
                    { "text": "哥哥喝茶。 (Gēge hē chá.)", "correct": false },
                    { "text": "姐姐吃饭。 (Jiějie chī fàn.)", "correct": false },
                    { "text": "哥哥不喝茶。 (Gēge bù hē chá.)", "correct": true }
                ]
            },
            {
                "audioText": "他说韩语，老师说汉语。",
                "options": [
                    { "text": "他说汉语，老师说韩语。 (Tā shuō Hànyǔ, lǎoshī shuō Hányǔ.)", "correct": false },
                    { "text": "他说韩语，老师说汉语。 (Tā shuō Hányǔ, lǎoshī shuō Hànyǔ.)", "correct": true },
                    { "text": "我学汉语。 (Wǒ xué Hànyǔ.)", "correct": false }
                ]
            },
            {
                "audioText": "他们吃什么？",
                "options": [
                    { "text": "他们吃什么？ (Tāmen chī shénme?)", "correct": true },
                    { "text": "他们喝什么？ (Tāmen hē shénme?)", "correct": false },
                    { "text": "他们买什么？ (Tāmen mǎi shénme?)", "correct": false }
                ]
            },
            {
                "audioText": "妹妹吃蛋糕，弟弟吃面包。",
                "options": [
                    { "text": "妹妹吃蛋糕，弟弟吃面包。 (Mèimei chī dàngāo, dìdi chī miànbāo.)", "correct": true },
                    { "text": "弟弟吃蛋糕，妹妹吃面包。 (Dìdi chī dàngāo, mèimei chī miànbāo.)", "correct": false },
                    { "text": "姐姐买衣服，哥哥买袜子。 (Jiějie mǎi yīfu, gēge mǎi wàzi.)", "correct": false }
                ]
            },
            {
                "audioText": "他们喝什么？",
                "options": [
                    { "text": "他们吃什么？ (Tāmen chī shénme?)", "correct": false },
                    { "text": "他们喝什么？ (Tāmen hē shénme?)", "correct": true },
                    { "text": "他们买什么？ (Tāmen mǎi shénme?)", "correct": false }
                ]
            },
            {
                "audioText": "爷爷喝啤酒，奶奶喝茶。",
                "options": [
                    { "text": "奶奶喝啤酒，爷爷喝茶。 (Nǎinai hē píjiǔ, yéye hē chá.)", "correct": false },
                    { "text": "爷爷喝茶，奶奶喝啤酒。 (Yéye hē chá, nǎinai hē píjiǔ.)", "correct": false },
                    { "text": "爷爷喝啤酒，奶奶喝茶。 (Yéye hē píjiǔ, nǎinai hē chá.)", "correct": true }
                ]
            },
            {
                "audioText": "他们买什么？",
                "options": [
                    { "text": "他们吃什么？ (Tāmen chī shénme?)", "correct": false },
                    { "text": "他们写什么？ (Tāmen xiě shénme?)", "correct": false },
                    { "text": "他们买什么？ (Tāmen mǎi shénme?)", "correct": true }
                ]
            },
            {
                "audioText": "姐姐买衣服，哥哥买袜子。",
                "options": [
                    { "text": "姐姐买衣服，哥哥买袜子。 (Jiějie mǎi yīfu, gēge mǎi wàzi.)", "correct": true },
                    { "text": "哥哥买衣服，姐姐买袜子。 (Gēge mǎi yīfu, jiějie mǎi wàzi.)", "correct": false },
                    { "text": "妹妹吃蛋糕，弟弟吃面包。 (Mèimei chī dàngāo, dìdi chī miànbāo.)", "correct": false }
                ]
            },
            {
                "audioText": "他们看什么？",
                "options": [
                    { "text": "他们买什么？ (Tāmen mǎi shénme?)", "correct": false },
                    { "text": "他们看什么？ (Tāmen kàn shénme?)", "correct": true },
                    { "text": "他们喝什么？ (Tāmen hē shénme?)", "correct": false }
                ]
            },
            {
                "audioText": "爸爸看电视，妈妈看书。",
                "options": [
                    { "text": "爸爸看电视，妈妈看书。 (Bàba kàn diànshì, māma kàn shū.)", "correct": true },
                    { "text": "妈妈看电视，爸爸看书。 (Māma kàn diànshì, bàba kàn shū.)", "correct": false },
                    { "text": "爸爸看书，妈妈看电视。 (Bàba kàn shū, māma kàn diànshì.)", "correct": false }
                ]
            }
        ]
    },
    {
        "lesson": 12,
        "title": "회화 듣기 연습",
        "steps": [
            {
                "audioText": "她是谁？",
                "options": [
                    { "text": "他是我朋友。 (Tā shì wǒ péngyou.)", "correct": false },
                    { "text": "她是谁？ (Tā shì shéi?)", "correct": true },
                    { "text": "她是我的同学。 (Tā shì wǒ de tóngxué.)", "correct": false }
                ]
            },
            {
                "audioText": "她是我朋友。",
                "options": [
                    { "text": "她是我朋友。 (Tā shì wǒ péngyou.)", "correct": true },
                    { "text": "他是我的弟弟。 (Tā shì wǒ de dìdi.)", "correct": false },
                    { "text": "她不是我的朋友。 (Tā bú shì wǒ de péngyou.)", "correct": false }
                ]
            },
            {
                "audioText": "她是不是你的女朋友？",
                "options": [
                    { "text": "她不是我的女朋友。 (Tā bú shì wǒ de nǚpéngyou.)", "correct": false },
                    { "text": "他是不是你的男朋友？ (Tā shì bu shì nǐ de nánpéngyou?)", "correct": false },
                    { "text": "她是不是你的女朋友？ (Tā shì bu shì nǐ de nǚpéngyou?)", "correct": true }
                ]
            },
            {
                "audioText": "她不是我的女朋友。",
                "options": [
                    { "text": "她不是我的女同学。 (Tā bú shì wǒ de nǚ tóngxué.)", "correct": false },
                    { "text": "她不是我的女朋友。 (Tā bú shì wǒ de nǚpéngyou.)", "correct": true },
                    { "text": "她是我的女朋友。 (Tā shì wǒ de nǚpéngyou.)", "correct": false }
                ]
            },
            {
                "audioText": "你是谁？",
                "options": [
                    { "text": "你是谁？ (Nǐ shì shéi?)", "correct": true },
                    { "text": "他是老师。 (Tā shì lǎoshī.)", "correct": false },
                    { "text": "我是谁？ (Wǒ shì shéi?)", "correct": false }
                ]
            },
            {
                "audioText": "我是老师。",
                "options": [
                    { "text": "我是学生。 (Wǒ shì xuésheng.)", "correct": false },
                    { "text": "我是老师。 (Wǒ shì lǎoshī.)", "correct": true },
                    { "text": "他是老师。 (Tā shì lǎoshī.)", "correct": false }
                ]
            },
            {
                "audioText": "他们是谁？",
                "options": [
                    { "text": "你们是谁？ (Nǐmen shì shéi?)", "correct": false },
                    { "text": "他们是谁？ (Tāmen shì shéi?)", "correct": true },
                    { "text": "她是你的朋友吗？ (Tā shì nǐ de péngyou ma?)", "correct": false }
                ]
            },
            {
                "audioText": "他们都是学生。",
                "options": [
                    { "text": "他们都是学生。 (Tāmen dōu shì xuéshēng.)", "correct": true },
                    { "text": "他们都是老师。 (Tāmen dōu shì lǎoshī.)", "correct": false },
                    { "text": "我们都是学生。 (Wǒmen dōu shì xuéshēng.)", "correct": false }
                ]
            },
            {
                "audioText": "他是谁？",
                "options": [
                    { "text": "你是谁？ (Nǐ shì shéi?)", "correct": false },
                    { "text": "她是我的同学。 (Tā shì wǒ de tóngxué.)", "correct": false },
                    { "text": "他是谁？ (Tā shì shéi?)", "correct": true }
                ]
            },
            {
                "audioText": "他是我的弟弟。",
                "options": [
                    { "text": "她是我的妹妹。 (Tā shì wǒ de mèimei.)", "correct": false },
                    { "text": "他是我的哥哥。 (Tā shì wǒ de gēge.)", "correct": false },
                    { "text": "他是我的弟弟。 (Tā shì wǒ de dìdi.)", "correct": true }
                ]
            },
            {
                "audioText": "她是谁？",
                "options": [
                    { "text": "她是谁？ (Tā shì shéi?)", "correct": true },
                    { "text": "他是我们老师。 (Tā shì wǒmen lǎoshī.)", "correct": false },
                    { "text": "你是谁？ (Nǐ shì shéi?)", "correct": false }
                ]
            },
            {
                "audioText": "她是我的同学。",
                "options": [
                    { "text": "他是我的同学。 (Tā shì wǒ de tóngxué.)", "correct": false },
                    { "text": "她是我的同学。 (Tā shì wǒ de tóngxué.)", "correct": true },
                    { "text": "她是我的朋友。 (Tā shì wǒ de péngyou.)", "correct": false }
                ]
            },
            {
                "audioText": "爸爸是医生吗？",
                "options": [
                    { "text": "妈妈是医生吗？ (Māma shì yīshēng ma?)", "correct": false },
                    { "text": "爸爸是护士吗？ (Bàba shì hùshi ma?)", "correct": false },
                    { "text": "爸爸是医生吗？ (Bàba shì yīshēng ma?)", "correct": true }
                ]
            },
            {
                "audioText": "爸爸是医生。",
                "options": [
                    { "text": "爸爸是护士。 (Bàba shì hùshi.)", "correct": false },
                    { "text": "爸爸是医生。 (Bàba shì yīshēng.)", "correct": true },
                    { "text": "爷爷是医生。 (Yéye shì yīshēng.)", "correct": false }
                ]
            },
            {
                "audioText": "妈妈也是医生吗？",
                "options": [
                    { "text": "妈妈也是医生吗？ (Māma yě shì yīshēng ma?)", "correct": true },
                    { "text": "妈妈是护士吗？ (Māma shì hùshi ma?)", "correct": false },
                    { "text": "姐姐也是医生吗？ (Jiějie yě shì yīshēng ma?)", "correct": false }
                ]
            },
            {
                "audioText": "妈妈不是医生，是护士。",
                "options": [
                    { "text": "爸爸不是护士，是医生。 (Bàba bú shì hùshi, shì yīshēng.)", "correct": false },
                    { "text": "妈妈不是护士，是医生。 (Māma bú shì hùshi, shì yīshēng.)", "correct": false },
                    { "text": "妈妈不是医生，是护士。 (Māma bú shì yīshēng, shì hùshi.)", "correct": true }
                ]
            },
            {
                "audioText": "东民的姐姐是老师。",
                "options": [
                    { "text": "东民的姐姐是护士。 (Dōngmín de jiějie shì hùshi.)", "correct": false },
                    { "text": "东民的姐姐是老师。 (Dōngmín de jiějie shì lǎoshī.)", "correct": true },
                    { "text": "东民的哥哥是老师。 (Dōngmín de gēge shì lǎoshī.)", "correct": false }
                ]
            },
            {
                "audioText": "东民的妈妈是护士。",
                "options": [
                    { "text": "东民的妈妈是医生。 (Dōngmín de māma shì yīshēng.)", "correct": false },
                    { "text": "东民的妈妈是护士。 (Dōngmín de māma shì hùshi.)", "correct": true },
                    { "text": "东民的姐姐是护士。 (Dōngmín de jiějie shì hùshi.)", "correct": false }
                ]
            },
            {
                "audioText": "东民的爷爷是医生。",
                "options": [
                    { "text": "东民的爷爷是医生。 (Dōngmín de yéye shì yīshēng.)", "correct": true },
                    { "text": "东民的奶奶是医生。 (Dōngmín de nǎinai shì yīshēng.)", "correct": false },
                    { "text": "东民的爷爷是老师。 (Dōngmín de yéye shì lǎoshī.)", "correct": false }
                ]
            },
            {
                "audioText": "她是谁的中国朋友？",
                "options": [
                    { "text": "他是谁的中国朋友？ (Tā shì shéi de Zhōngguó péngyou?)", "correct": false },
                    { "text": "她是谁的韩国朋友？ (Tā shì shéi de Hánguó péngyou?)", "correct": false },
                    { "text": "她是谁的中国朋友？ (Tā shì shéi de Zhōngguó péngyou?)", "correct": true }
                ]
            },
            {
                "audioText": "她是东民的中国朋友。",
                "options": [
                    { "text": "她是我朋友。 (Tā shì wǒ péngyou.)", "correct": false },
                    { "text": "她是东民的中国朋友。 (Tā shì Dōngmín de Zhōngguó péngyou.)", "correct": true },
                    { "text": "他是东民的中国朋友。 (Tā shì Dōngmín de Zhōngguó péngyou.)", "correct": false }
                ]
            },
            {
                "audioText": "他是谁的老师？",
                "options": [
                    { "text": "她是你的老师吗？ (Tā shì nǐ de lǎoshī ma?)", "correct": false },
                    { "text": "他是谁的老师？ (Tā shì shéi de lǎoshī?)", "correct": true },
                    { "text": "他是谁的爸爸？ (Tā shì shéi de bàba?)", "correct": false }
                ]
            },
            {
                "audioText": "他是弟弟的老师。",
                "options": [
                    { "text": "他是弟弟的老师。 (Tā shì dìdi de lǎoshī.)", "correct": true },
                    { "text": "他是哥哥的老师。 (Tā shì gēge de lǎoshī.)", "correct": false },
                    { "text": "他是我的老师。 (Tā shì wǒ de lǎoshī.)", "correct": false }
                ]
            },
            {
                "audioText": "她是谁的女朋友？",
                "options": [
                    { "text": "她是谁的男朋友？ (Tā shì shéi de nánpéngyou?)", "correct": false },
                    { "text": "她是谁的女朋友？ (Tā shì shéi de nǚpéngyou?)", "correct": true },
                    { "text": "她是不是你的女同学？ (Tā shì bu shì nǐ de nǚ tóngxué?)", "correct": false }
                ]
            },
            {
                "audioText": "她是哥哥的女朋友。",
                "options": [
                    { "text": "她是弟弟的朋友。 (Tā shì dìdi de péngyou.)", "correct": false },
                    { "text": "她是哥哥的女朋友。 (Tā shì gēge de nǚpéngyou.)", "correct": true },
                    { "text": "她不是我哥哥的女朋友。 (Tā bú shì wǒ gēge de nǚpéngyou.)", "correct": false }
                ]
            }
        ]
    },
    {
        "lesson": 13,
        "title": "회화 듣기 연습",
        "steps": [
            {
                "audioText": "你去哪儿？",
                "options": [
                    { "text": "你去哪儿？ (Nǐ qù nǎr?)", "correct": true },
                    { "text": "你在哪儿？ (Nǐ zài nǎr?)", "correct": false },
                    { "text": "他是谁？ (Tā shì shéi?)", "correct": false }
                ]
            },
            {
                "audioText": "我去咖啡店。",
                "options": [
                    { "text": "我去图书馆。 (Wǒ qù túshūguǎn.)", "correct": false },
                    { "text": "我去咖啡店。 (Wǒ qù kāfēidiàn.)", "correct": true },
                    { "text": "我在咖啡店。 (Wǒ zài kāfēidiàn.)", "correct": false }
                ]
            },
            {
                "audioText": "咖啡店在哪儿？",
                "options": [
                    { "text": "图书馆在哪儿？ (Túshūguǎn zài nǎr?)", "correct": false },
                    { "text": "网吧在哪儿？ (Wǎngbā zài nǎr?)", "correct": false },
                    { "text": "咖啡店在哪儿？ (Kāfēidiàn zài nǎr?)", "correct": true }
                ]
            },
            {
                "audioText": "就在那儿。",
                "options": [
                    { "text": "就在这儿。 (Jiù zài zhèr.)", "correct": false },
                    { "text": "就在那儿。 (Jiù zài nàr.)", "correct": true },
                    { "text": "没有。 (Méi yǒu.)", "correct": false }
                ]
            },
            {
                "audioText": "你去哪儿？",
                "options": [
                    { "text": "你买什么？ (Nǐ mǎi shénme?)", "correct": false },
                    { "text": "你去哪儿？ (Nǐ qù nǎr?)", "correct": true },
                    { "text": "你去图书馆吗？ (Nǐ qù túshūguǎn ma?)", "correct": false }
                ]
            },
            {
                "audioText": "我去图书馆。",
                "options": [
                    { "text": "我去图书馆。 (Wǒ qù túshūguǎn.)", "correct": true },
                    { "text": "我去咖啡店。 (Wǒ qù kāfēidiàn.)", "correct": false },
                    { "text": "他去图书馆。 (Tā qù túshūguǎn.)", "correct": false }
                ]
            },
            {
                "audioText": "他也去图书馆吗？",
                "options": [
                    { "text": "他也去图书馆吗？ (Tā yě qù túshūguǎn ma?)", "correct": true },
                    { "text": "他也去网吧吗？ (Tā yě qù wǎngbā ma?)", "correct": false },
                    { "text": "他也去咖啡店吗？ (Tā yě qù kāfēidiàn ma?)", "correct": false }
                ]
            },
            {
                "audioText": "他不去图书馆，他去网吧。",
                "options": [
                    { "text": "他不去网吧，他去图书馆。 (Tā bú qù wǎngbā, tā qù túshūguǎn.)", "correct": false },
                    { "text": "他不去图书馆，他去网吧。 (Tā bú qù túshūguǎn, tā qù wǎngbā.)", "correct": true },
                    { "text": "他不去咖啡店，他去网吧。 (Tā bú qù kāfēidiàn, tā qù wǎngbā.)", "correct": false }
                ]
            },
            {
                "audioText": "我的袜子在哪儿？",
                "options": [
                    { "text": "我的鞋在哪儿？ (Wǒ de xié zài nǎr?)", "correct": false },
                    { "text": "你的衣服在哪儿？ (Nǐ de yīfu zài nǎr?)", "correct": false },
                    { "text": "我的袜子在哪儿？ (Wǒ de wàzi zài nǎr?)", "correct": true }
                ]
            },
            {
                "audioText": "你的袜子在这儿。",
                "options": [
                    { "text": "你的鞋在这儿。 (Nǐ de xié zài zhèr.)", "correct": false },
                    { "text": "你的袜子在那儿。 (Nǐ de wàzi zài nàr.)", "correct": false },
                    { "text": "你的袜子在这儿。 (Nǐ de wàzi zài zhèr.)", "correct": true }
                ]
            },
            {
                "audioText": "我的鞋在哪儿？",
                "options": [
                    { "text": "我的鞋在这儿。 (Wǒ de xié zài zhèr.)", "correct": false },
                    { "text": "我的鞋在哪儿？ (Wǒ de xié zài nǎr?)", "correct": true },
                    { "text": "我的袜子在哪儿？ (Wǒ de wàzi zài nǎr?)", "correct": false }
                ]
            },
            {
                "audioText": "鞋在那儿。",
                "options": [
                    { "text": "鞋在这儿。 (Xié zài zhèr.)", "correct": false },
                    { "text": "鞋在那儿。 (Xié zài nàr.)", "correct": true },
                    { "text": "衣服在那儿。 (Yīfu zài nàr.)", "correct": false }
                ]
            },
            {
                "audioText": "你家在哪儿？",
                "options": [
                    { "text": "你们学校在哪儿？ (Nǐmen xuéxiào zài nǎr?)", "correct": false },
                    { "text": "你家在哪儿？ (Nǐ jiā zài nǎr?)", "correct": true },
                    { "text": "咖啡店在哪儿？ (Kāfēidiàn zài nǎr?)", "correct": false }
                ]
            },
            {
                "audioText": "我家在首尔。",
                "options": [
                    { "text": "我家在釜山。 (Wǒ jiā zài Fǔshān.)", "correct": false },
                    { "text": "你们学校在首尔。 (Nǐmen xuéxiào zài Shǒu'ěr.)", "correct": false },
                    { "text": "我家在首尔。 (Wǒ jiā zài Shǒu'ěr.)", "correct": true }
                ]
            },
            {
                "audioText": "你们学校也在首尔吗？",
                "options": [
                    { "text": "这儿是首尔吗？ (Zhèr shì Shǒu'ěr ma?)", "correct": false },
                    { "text": "你们学校也在首尔吗？ (Nǐmen xuéxiào yě zài Shǒu'ěr ma?)", "correct": true },
                    { "text": "你家也在首尔吗？ (Nǐ jiā yě zài Shǒu'ěr ma?)", "correct": false }
                ]
            },
            {
                "audioText": "我们学校不在首尔，在釜山。",
                "options": [
                    { "text": "我们学校不在首尔，在釜山。 (Wǒmen xuéxiào bú zài Shǒu'ěr, zài Fǔshān.)", "correct": true },
                    { "text": "我家不在首尔，在釜山。 (Wǒ jiā bú zài Shǒu'ěr, zài Fǔshān.)", "correct": false },
                    { "text": "我们学校在首尔，不在釜山。 (Wǒmen xuéxiào zài Shǒu'ěr, bú zài Fǔshān.)", "correct": false }
                ]
            },
            {
                "audioText": "爸爸去银行。",
                "options": [
                    { "text": "妈妈去银行。 (Māma qù yínháng.)", "correct": false },
                    { "text": "爸爸去银行。 (Bàba qù yínháng.)", "correct": true },
                    { "text": "爸爸去公司。 (Bàba qù gōngsī.)", "correct": false }
                ]
            },
            {
                "audioText": "妈妈去书店。",
                "options": [
                    { "text": "妈妈去书店。 (Māma qù shūdiàn.)", "correct": true },
                    { "text": "爸爸去书店。 (Bàba qù shūdiàn.)", "correct": false },
                    { "text": "妈妈去咖啡店。 (Māma qù kāfēidiàn.)", "correct": false }
                ]
            },
            {
                "audioText": "爷爷、奶奶去医院。",
                "options": [
                    { "text": "爷爷、奶奶去公园。 (Yéye、nǎinai qù gōngyuán.)", "correct": false },
                    { "text": "爷爷、奶奶去银行。 (Yéye、nǎinai qù yínháng.)", "correct": false },
                    { "text": "爷爷、奶奶去医院。 (Yéye、nǎinai qù yīyuàn.)", "correct": true }
                ]
            },
            {
                "audioText": "哥哥去星巴克。",
                "options": [
                    { "text": "哥哥去麦当劳。 (Gēge qù Màidāngláo.)", "correct": false },
                    { "text": "哥哥去星巴克。 (Gēge qù Xīngbākè.)", "correct": true },
                    { "text": "弟弟去星巴克。 (Dìdi qù Xīngbākè.)", "correct": false }
                ]
            },
            {
                "audioText": "妹妹去麦当劳。",
                "options": [
                    { "text": "妹妹去麦当劳。 (Mèimei qù Màidāngláo.)", "correct": true },
                    { "text": "妹妹去星巴克。 (Mèimei qù Xīngbākè.)", "correct": false },
                    { "text": "弟弟去麦当劳。 (Dìdi qù Màidāngláo.)", "correct": false }
                ]
            },
            {
                "audioText": "弟弟去网吧。",
                "options": [
                    { "text": "弟弟去网吧。 (Dìdi qù wǎngbā.)", "correct": true },
                    { "text": "哥哥去网吧。 (Gēge qù wǎngbā.)", "correct": false },
                    { "text": "弟弟去学校。 (Dìdi qù xuéxiào.)", "correct": false }
                ]
            }
        ]
    },
    {
        "lesson": 14,
        "title": "회화 듣기 연습",
        "steps": [
            {
                "audioText": "现在几点？",
                "options": [
                    { "text": "现在几点？ (Xiànzài jǐ diǎn?)", "correct": true },
                    { "text": "现在三点。 (Xiànzài sān diǎn.)", "correct": false },
                    { "text": "现在几分？ (Xiànzài jǐ fēn?)", "correct": false }
                ]
            },
            {
                "audioText": "现在三点。",
                "options": [
                    { "text": "现在六点。 (Xiànzài liù diǎn.)", "correct": false },
                    { "text": "现在三点半。 (Xiànzài sān diǎn bàn.)", "correct": false },
                    { "text": "现在三点。 (Xiànzài sān diǎn.)", "correct": true }
                ]
            },
            {
                "audioText": "你几点下课？",
                "options": [
                    { "text": "你几点上课？ (Nǐ jǐ diǎn shàng kè?)", "correct": false },
                    { "text": "你几点下班？ (Nǐ jǐ diǎn xià bān?)", "correct": false },
                    { "text": "你几点下课？ (Nǐ jǐ diǎn xià kè?)", "correct": true }
                ]
            },
            {
                "audioText": "我五点半下课。",
                "options": [
                    { "text": "我五点半下课。 (Wǒ wǔ diǎn bàn xià kè.)", "correct": true },
                    { "text": "我五点半下班。 (Wǒ wǔ diǎn bàn xià bān.)", "correct": false },
                    { "text": "我八点半上课。 (Wǒ bā diǎn bàn shàng kè.)", "correct": false }
                ]
            },
            {
                "audioText": "现在几点？",
                "options": [
                    { "text": "现在几点？ (Xiànzài jǐ diǎn?)", "correct": true },
                    { "text": "现在三点。 (Xiànzài sān diǎn.)", "correct": false },
                    { "text": "你几点上课？ (Nǐ jǐ diǎn shàng kè?)", "correct": false }
                ]
            },
            {
                "audioText": "九点零五分。",
                "options": [
                    { "text": "四点一刻。 (Sì diǎn yí kè.)", "correct": false },
                    { "text": "九点零五分。 (Jiǔ diǎn líng wǔ fēn.)", "correct": true },
                    { "text": "八点半。 (Bā diǎn bàn.)", "correct": false }
                ]
            },
            {
                "audioText": "现在几点？",
                "options": [
                    { "text": "你几点下课？ (Nǐ jǐ diǎn xià kè?)", "correct": false },
                    { "text": "现在几点？ (Xiànzài jǐ diǎn?)", "correct": true },
                    { "text": "你几点起床？ (Nǐ jǐ diǎn qǐ chuáng?)", "correct": false }
                ]
            },
            {
                "audioText": "四点一刻。",
                "options": [
                    { "text": "四点半。 (Sì diǎn bàn.)", "correct": false },
                    { "text": "九点一刻。 (Jiǔ diǎn yí kè.)", "correct": false },
                    { "text": "四点一刻。 (Sì diǎn yí kè.)", "correct": true }
                ]
            },
            {
                "audioText": "你几点上课[上班]？",
                "options": [
                    { "text": "你几点上课[上班]？ (Nǐ jǐ diǎn shàng kè[shàng bān]?)", "correct": true },
                    { "text": "你几点下课[下班]？ (Nǐ jǐ diǎn xià kè[xià bān]?)", "correct": false },
                    { "text": "我八点半上课。 (Wǒ bā diǎn bàn shàng kè.)", "correct": false }
                ]
            },
            {
                "audioText": "我八点半上课[上班]。",
                "options": [
                    { "text": "我六点下课。 (Wǒ liù diǎn xià kè.)", "correct": false },
                    { "text": "我八点半上课[上班]。 (Wǒ bā diǎn bàn shàng kè[shàng bān].)", "correct": true },
                    { "text": "你几点上班？ (Nǐ jǐ diǎn shàng bān?)", "correct": false }
                ]
            },
            {
                "audioText": "你几点下课[下班]？",
                "options": [
                    { "text": "你几点起床？ (Nǐ jǐ diǎn qǐ chuáng?)", "correct": false },
                    { "text": "你几点下课[下班]？ (Nǐ jǐ diǎn xià kè[xià bān]?)", "correct": true },
                    { "text": "你几点睡觉？ (Nǐ jǐ diǎn shuì jiào?)", "correct": false }
                ]
            },
            {
                "audioText": "我六点下课[下班]。",
                "options": [
                    { "text": "我六点下课[下班]。 (Wǒ liù diǎn xià kè[xià bān].)", "correct": true },
                    { "text": "我五点半下班。 (Wǒ wǔ diǎn bàn xià bān.)", "correct": false },
                    { "text": "我八点半上课。 (Wǒ bā diǎn bàn shàng kè.)", "correct": false }
                ]
            },
            {
                "audioText": "你几点起床？",
                "options": [
                    { "text": "你几点下课？ (Nǐ jǐ diǎn xià kè?)", "correct": false },
                    { "text": "你几点睡觉？ (Nǐ jǐ diǎn shuì jiào?)", "correct": false },
                    { "text": "你几点起床？ (Nǐ jǐ diǎn qǐ chuáng?)", "correct": true }
                ]
            },
            {
                "audioText": "我七点起床。",
                "options": [
                    { "text": "我十一点睡觉。 (Wǒ shíyī diǎn shuì jiào.)", "correct": false },
                    { "text": "我七点起床。 (Wǒ qī diǎn qǐ chuáng.)", "correct": true },
                    { "text": "我六点下班。 (Wǒ liù diǎn xià bān.)", "correct": false }
                ]
            },
            {
                "audioText": "你几点睡觉？",
                "options": [
                    { "text": "你几点睡觉？ (Nǐ jǐ diǎn shuì jiào?)", "correct": true },
                    { "text": "你几点起床？ (Nǐ jǐ diǎn qǐ chuáng?)", "correct": false },
                    { "text": "我十一点睡觉。 (Wǒ shíyī diǎn shuì jiào.)", "correct": false }
                ]
            },
            {
                "audioText": "我十一点睡觉。",
                "options": [
                    { "text": "我七点起床。 (Wǒ qī diǎn qǐ chuáng.)", "correct": false },
                    { "text": "我十点半睡觉。 (Wǒ shí diǎn bàn shuì jiào.)", "correct": false },
                    { "text": "我十一点睡觉。 (Wǒ shíyī diǎn shuì jiào.)", "correct": true }
                ]
            },
            {
                "audioText": "他七点半/七点三十分吃早饭。",
                "options": [
                    { "text": "他七点半/七点三十分吃早饭。 (Tā qī diǎn bàn/qī diǎn sānshí fēn chī zǎofàn.)", "correct": true },
                    { "text": "他十点上课。 (Tā shí diǎn shàng kè.)", "correct": false },
                    { "text": "他十二点半吃午饭。 (Tā shí'èr diǎn bàn chī wǔfàn.)", "correct": false }
                ]
            },
            {
                "audioText": "他十点上课。",
                "options": [
                    { "text": "他十点上课。 (Tā shí diǎn shàng kè.)", "correct": true },
                    { "text": "他七点起床。 (Tā qī diǎn qǐ chuáng.)", "correct": false },
                    { "text": "他两点下课。 (Tā liǎng diǎn xià kè.)", "correct": false }
                ]
            },
            {
                "audioText": "他十二点半/十二点三十分吃午饭。",
                "options": [
                    { "text": "他四点半去麦当劳。 (Tā sì diǎn bàn qù Màidāngláo.)", "correct": false },
                    { "text": "他十二点半/十二点三十分吃午饭。 (Tā shí'èr diǎn bàn/shí'èr diǎn sānshí fēn chī wǔfàn.)", "correct": true },
                    { "text": "他七点半吃早饭。 (Tā qī diǎn bàn chī zǎofàn.)", "correct": false }
                ]
            },
            {
                "audioText": "他两点下课。",
                "options": [
                    { "text": "他十点上课。 (Tā shí diǎn shàng kè.)", "correct": false },
                    { "text": "他两点下课。 (Tā liǎng diǎn xià kè.)", "correct": true },
                    { "text": "他八点玩儿电脑。 (Tā bā diǎn wánr diànnǎo.)", "correct": false }
                ]
            },
            {
                "audioText": "他四点半/四点三十分去麦当劳。",
                "options": [
                    { "text": "他四点半/四点三十分去麦当劳。 (Tā sì diǎn bàn/sì diǎn sānshí fēn qù Màidāngláo.)", "correct": true },
                    { "text": "他去买衣服。 (Tā qù mǎi yīfu.)", "correct": false },
                    { "text": "他去图书馆。 (Tā qù túshūguǎn.)", "correct": false }
                ]
            },
            {
                "audioText": "他八点玩儿电脑。",
                "options": [
                    { "text": "他十二点半吃午饭。 (Tā shí'èr diǎn bàn chī wǔfàn.)", "correct": false },
                    { "text": "他八点睡觉。 (Tā bā diǎn shuì jiào.)", "correct": false },
                    { "text": "他八点玩儿电脑。 (Tā bā diǎn wánr diànnǎo.)", "correct": true }
                ]
            },
            {
                "audioText": "爸爸七点零五分去补习班。",
                "options": [
                    { "text": "爸爸九点一刻上班。 (Bàba jiǔ diǎn yí kè shàng bān.)", "correct": false },
                    { "text": "爸爸七点零五分去补习班。 (Bàba qī diǎn líng wǔ fēn qù bǔxíbān.)", "correct": true },
                    { "text": "妈妈七点零五分去补习班。 (Māma qī diǎn líng wǔ fēn qù bǔxíbān.)", "correct": false }
                ]
            },
            {
                "audioText": "爸爸九点一刻/九点十五分上班。",
                "options": [
                    { "text": "爸爸九点一刻/九点十五分上班。 (Bàba jiǔ diǎn yí kè/jiǔ diǎn shíwǔ fēn shàng bān.)", "correct": true },
                    { "text": "爸爸十点一刻喝咖啡。 (Bàba shí diǎn yí kè hē kāfēi.)", "correct": false },
                    { "text": "爸爸六点三刻下班。 (Bàba liù diǎn sān kè xià bān.)", "correct": false }
                ]
            },
            {
                "audioText": "爸爸十点一刻/十点十五分喝咖啡。",
                "options": [
                    { "text": "爸爸十点一刻/十点十五分喝茶。 (Bàba shí diǎn yí kè/shí diǎn shíwǔ fēn hē chá.)", "correct": false },
                    { "text": "爸爸十点一刻/十点十五分喝咖啡。 (Bàba shí diǎn yí kè/shí diǎn shíwǔ fēn hē kāfēi.)", "correct": true },
                    { "text": "爸爸八点半看电视。 (Bàba bā diǎn bàn kàn diànshì.)", "correct": false }
                ]
            },
            {
                "audioText": "爸爸六点三刻/六点四十五分下班。",
                "options": [
                    { "text": "爸爸九点一刻上班。 (Bàba jiǔ diǎn yí kè shàng bān.)", "correct": false },
                    { "text": "爸爸六点三刻/六点四十五分下班。 (Bàba liù diǎn sān kè/liù diǎn sìshíwǔ fēn xià bān.)", "correct": true },
                    { "text": "爸爸六点半下班。 (Bàba liù diǎn bàn xià bān.)", "correct": false }
                ]
            },
            {
                "audioText": "爸爸八点半/八点三十分看电视。",
                "options": [
                    { "text": "爸爸十一点五十五分睡觉。 (Bàba shíyī diǎn wǔshíwǔ fēn shuì jiào.)", "correct": false },
                    { "text": "爸爸八点半/八点三十分看电脑。 (Bàba bā diǎn bàn/bā diǎn sānshí fēn kán diànnǎo.)", "correct": false },
                    { "text": "爸爸八点半/八点三十分看电视。 (Bàba bā diǎn bàn/bā diǎn sānshí fēn kàn diànshì.)", "correct": true }
                ]
            },
            {
                "audioText": "爸爸十一点五十五分/差五分十二点睡觉。",
                "options": [
                    { "text": "爸爸十一点五十五分/差五分十二点睡觉。 (Bàba shíyī diǎn wǔshíwǔ fēn/chà wǔ fēn shí'èr diǎn shuì jiào.)", "correct": true },
                    { "text": "爸爸十二点睡觉。 (Bàba shí'èr diǎn shuì jiào.)", "correct": false },
                    { "text": "爸爸七点零五分起床。 (Bàba qī diǎn líng wǔ fēn qǐ chuáng.)", "correct": false }
                ]
            }
        ]
    },
    {
        "lesson": 15,
        "title": "회화 듣기 연습",
        "steps": [
            {
                "audioText": "这儿有热狗吗？",
                "options": [
                    { "text": "这儿有热狗吗？ (Zhèr yǒu règǒu ma?)", "correct": true },
                    { "text": "那儿有热狗吗？ (Nàr yǒu règǒu ma?)", "correct": false },
                    { "text": "这儿有什么？ (Zhèr yǒu shénme?)", "correct": false }
                ]
            },
            {
                "audioText": "对不起，这儿没有热狗。",
                "options": [
                    { "text": "这儿有热狗。 (Zhèr yǒu règǒu.)", "correct": false },
                    { "text": "对不起，这儿没有热狗。 (Duìbuqǐ, zhèr méiyǒu règǒu.)", "correct": true },
                    { "text": "对不起，那儿没有热狗。 (Duìbuqǐ, nàr méiyǒu règǒu.)", "correct": false }
                ]
            },
            {
                "audioText": "这儿有什么？",
                "options": [
                    { "text": "这儿有汉堡包吗？ (Zhèr yǒu hànbǎobāo ma?)", "correct": false },
                    { "text": "这儿有什么？ (Zhèr yǒu shénme?)", "correct": true },
                    { "text": "那儿有什么？ (Nàr yǒu shénme?)", "correct": false }
                ]
            },
            {
                "audioText": "有汉堡包和三明治。",
                "options": [
                    { "text": "有汉堡包和三明治。 (Yǒu hànbǎobāo hé sānmíngzhì.)", "correct": true },
                    { "text": "有热狗和三明治。 (Yǒu règǒu hé sānmíngzhì.)", "correct": false },
                    { "text": "有汉堡包和热狗。 (Yǒu hànbǎobāo hé règǒu.)", "correct": false }
                ]
            },
            {
                "audioText": "你有哥哥吗？",
                "options": [
                    { "text": "你有妹妹吗？ (Nǐ yǒu mèimei ma?)", "correct": false },
                    { "text": "你有弟弟吗？ (Nǐ yǒu dìdi ma?)", "correct": false },
                    { "text": "你有哥哥吗？ (Nǐ yǒu gēge ma?)", "correct": true }
                ]
            },
            {
                "audioText": "我有哥哥。",
                "options": [
                    { "text": "我有哥哥。 (Wǒ yǒu gēge.)", "correct": true },
                    { "text": "我没有哥哥。 (Wǒ méiyǒu gēge.)", "correct": false },
                    { "text": "我有弟弟。 (Wǒ yǒu dìdi.)", "correct": false }
                ]
            },
            {
                "audioText": "你有没有弟弟？",
                "options": [
                    { "text": "你有没有哥哥？ (Nǐ yǒu méiyǒu gēge?)", "correct": false },
                    { "text": "你有没有弟弟？ (Nǐ yǒu méiyǒu dìdi?)", "correct": true },
                    { "text": "你有没有妹妹？ (Nǐ yǒu méiyǒu mèimei?)", "correct": false }
                ]
            },
            {
                "audioText": "我没有弟弟。",
                "options": [
                    { "text": "我没有妹妹。 (Wǒ méiyǒu mèimei.)", "correct": false },
                    { "text": "我没有哥哥。 (Wǒ méiyǒu gēge.)", "correct": false },
                    { "text": "我没有弟弟。 (Wǒ méiyǒu dìdi.)", "correct": true }
                ]
            },
            {
                "audioText": "你有什么书？",
                "options": [
                    { "text": "你有什么书？ (Nǐ yǒu shénme shū?)", "correct": true },
                    { "text": "她有什么书？ (Tā yǒu shénme shū?)", "correct": false },
                    { "text": "他有什么书？ (Tā yǒu shénme shū?)", "correct": false }
                ]
            },
            {
                "audioText": "我有汉语书。",
                "options": [
                    { "text": "我有英语书。 (Wǒ yǒu Yīngyǔ shū.)", "correct": false },
                    { "text": "我有汉语书。 (Wǒ yǒu Hànyǔ shū.)", "correct": true },
                    { "text": "他有汉语书。 (Tā yǒu Hànyǔ shū.)", "correct": false }
                ]
            },
            {
                "audioText": "她有什么书？",
                "options": [
                    { "text": "她有什么书？ (Tā yǒu shénme shū?)", "correct": true },
                    { "text": "你有什么书？ (Nǐ yǒu shénme shū?)", "correct": false },
                    { "text": "她有英语书吗？ (Tā yǒu Yīngyǔ shū ma?)", "correct": false }
                ]
            },
            {
                "audioText": "她有英语书。",
                "options": [
                    { "text": "我有英语书。 (Wǒ yǒu Yīngyǔ shū.)", "correct": false },
                    { "text": "她有汉语书。 (Tā yǒu Hànyǔ shū.)", "correct": false },
                    { "text": "她有英语书。 (Tā yǒu Yīngyǔ shū.)", "correct": true }
                ]
            },
            {
                "audioText": "这儿有什么？",
                "options": [
                    { "text": "那儿有什么？ (Nàr yǒu shénme?)", "correct": false },
                    { "text": "这儿有什么？ (Zhèr yǒu shénme?)", "correct": true },
                    { "text": "这儿有床吗？ (Zhèr yǒu chuáng ma?)", "correct": false }
                ]
            },
            {
                "audioText": "这儿有床。",
                "options": [
                    { "text": "这儿有桌子。 (Zhèr yǒu zhuōzi.)", "correct": false },
                    { "text": "那儿有床。 (Nàr yǒu chuáng.)", "correct": false },
                    { "text": "这儿有床。 (Zhèr yǒu chuáng.)", "correct": true }
                ]
            },
            {
                "audioText": "那儿有什么？",
                "options": [
                    { "text": "这儿有什么？ (Zhèr yǒu shénme?)", "correct": false },
                    { "text": "那儿有什么？ (Nàr yǒu shénme?)", "correct": true },
                    { "text": "那儿有椅子吗？ (Nàr yǒu yǐzi ma?)", "correct": false }
                ]
            },
            {
                "audioText": "那儿有桌子和椅子。",
                "options": [
                    { "text": "这儿有桌子和椅子。 (Zhèr yǒu zhuōzi hé yǐzi.)", "correct": false },
                    { "text": "那儿有床和椅子。 (Nàr yǒu chuáng hé yǐzi.)", "correct": false },
                    { "text": "那儿有桌子和椅子。 (Nàr yǒu zhuōzi hé yǐzi.)", "correct": true }
                ]
            },
            {
                "audioText": "奶奶有手机，爷爷没有手机。",
                "options": [
                    { "text": "爷爷有手机，奶奶没有手机。 (Yéye yǒu shǒujī, nǎinai méiyǒu shǒujī.)", "correct": false },
                    { "text": "奶奶有手机，爷爷没有手机。 (Nǎinai yǒu shǒujī, yéye méiyǒu shǒujī.)", "correct": true },
                    { "text": "奶奶和爷爷都有手机。 (Nǎinai hé yéye dōu yǒu shǒujī.)", "correct": false }
                ]
            },
            {
                "audioText": "哥哥有中国朋友，姐姐没有中国朋友。",
                "options": [
                    { "text": "哥哥有中国朋友，姐姐没有中国朋友。 (Gēge yǒu Zhōngguó péngyou, jiějie méiyǒu Zhōngguó péngyou.)", "correct": true },
                    { "text": "姐姐有中国朋友，哥哥没有中国朋友。 (Jiějie yǒu Zhōngguó péngyou, gēge méiyǒu Zhōngguó péngyou.)", "correct": false },
                    { "text": "哥哥有韩国朋友，姐姐没有韩国朋友。 (Gēge yǒu Hánguó péngyou, jiějie méiyǒu Hánguó péngyou.)", "correct": false }
                ]
            },
            {
                "audioText": "妹妹有娃娃，弟弟没有娃娃。",
                "options": [
                    { "text": "弟弟有娃娃，妹妹没有娃娃。 (Dìdi yǒu wáwa, mèimei méiyǒu wáwa.)", "correct": false },
                    { "text": "妹妹有娃娃，弟弟没有娃娃。 (Mèimei yǒu wáwa, dìdi méiyǒu wáwa.)", "correct": true },
                    { "text": "妹妹有玩具，弟弟没有玩具。 (Mèimei yǒu wánjù, dìdi méiyǒu wánjù.)", "correct": false }
                ]
            },
            {
                "audioText": "我家有电视，朋友家没有电视。",
                "options": [
                    { "text": "我家有电视，朋友家没有电视。 (Wǒ jiā yǒu diànshì, péngyou jiā méiyǒu diànshì.)", "correct": true },
                    { "text": "朋友家有电视，我家没有电视。 (Péngyou jiā yǒu diànshì, wǒ jiā méiyǒu diànshì.)", "correct": false },
                    { "text": "我家有电脑，朋友家没有电脑。 (Wǒ jiā yǒu diànnǎo, péngyou jiā méiyǒu diànnǎo.)", "correct": false }
                ]
            }
        ]
    },
    {
        "lesson": 16,
        "title": "회화 듣기 연습",
        "steps": [
            {
                "audioText": "我们要两个汉堡包。",
                "options": [
                    { "text": "你要两个汉堡包。 (Nǐ yào liǎng ge hànbǎobāo.)", "correct": false },
                    { "text": "我们要两个三明治。 (Wǒmen yào liǎng ge sānmíngzhì.)", "correct": false },
                    { "text": "我们要两个汉堡包。 (Wǒmen yào liǎng ge hànbǎobāo.)", "correct": true }
                ]
            },
            {
                "audioText": "你们喝什么？",
                "options": [
                    { "text": "你们吃什么？ (Nǐmen chī shénme?)", "correct": false },
                    { "text": "你们喝什么？ (Nǐmen hē shénme?)", "correct": true },
                    { "text": "我们喝什么？ (Wǒmen hē shénme?)", "correct": false }
                ]
            },
            {
                "audioText": "给我们两杯可乐。",
                "options": [
                    { "text": "给我们两瓶可乐。 (Gěi wǒmen liǎng píng kělè.)", "correct": false },
                    { "text": "给我们两杯可乐。 (Gěi wǒmen liǎng bēi kělè.)", "correct": true },
                    { "text": "给他们两杯可乐。 (Gěi tāmen liǎng bēi kělè.)", "correct": false }
                ]
            },
            {
                "audioText": "好，请等一下。",
                "options": [
                    { "text": "好，请进。 (Hǎo, qǐng jìn.)", "correct": false },
                    { "text": "好，请等一下。 (Hǎo, qǐng děng yíxià.)", "correct": true },
                    { "text": "好，没关系。 (Hǎo, méi guānxi.)", "correct": false }
                ]
            },
            {
                "audioText": "你有几本书？",
                "options": [
                    { "text": "你有几本书？ (Nǐ yǒu jǐ běn shū?)", "correct": true },
                    { "text": "你有几支铅笔？ (Nǐ yǒu jǐ zhī qiānbǐ?)", "correct": false },
                    { "text": "他有几本书？ (Tā yǒu jǐ běn shū?)", "correct": false }
                ]
            },
            {
                "audioText": "我有一本书。",
                "options": [
                    { "text": "我有两本书。 (Wǒ yǒu liǎng běn shū.)", "correct": false },
                    { "text": "我有一本书。 (Wǒ yǒu yì běn shū.)", "correct": true },
                    { "text": "我有一支铅笔。 (Wǒ yǒu yì zhī qiānbǐ.)", "correct": false }
                ]
            },
            {
                "audioText": "你有几支铅笔？",
                "options": [
                    { "text": "你有几支铅笔？ (Nǐ yǒu jǐ zhī qiānbǐ?)", "correct": true },
                    { "text": "你有几本书？ (Nǐ yǒu jǐ běn shū?)", "correct": false },
                    { "text": "我有一支铅笔。 (Wǒ yǒu yì zhī qiānbǐ.)", "correct": false }
                ]
            },
            {
                "audioText": "我有两支铅笔。",
                "options": [
                    { "text": "我有一支铅笔。 (Wǒ yǒu yì zhī qiānbǐ.)", "correct": false },
                    { "text": "我有两支铅笔。 (Wǒ yǒu liǎng zhī qiānbǐ.)", "correct": true },
                    { "text": "我有两本书。 (Wǒ yǒu liǎng běn shū.)", "correct": false }
                ]
            },
            {
                "audioText": "你吃几碗饭？",
                "options": [
                    { "text": "你喝几瓶啤酒？ (Nǐ hē jǐ píng píjiǔ?)", "correct": false },
                    { "text": "你吃几碗饭？ (Nǐ chī jǐ wǎn fàn?)", "correct": true },
                    { "text": "你吃几碗面？ (Nǐ chī jǐ wǎn miàn?)", "correct": false }
                ]
            },
            {
                "audioText": "我吃一碗饭。",
                "options": [
                    { "text": "我吃两碗饭。 (Wǒ chī liǎng wǎn fàn.)", "correct": false },
                    { "text": "我喝一瓶啤酒。 (Wǒ hē yì píng píjiǔ.)", "correct": false },
                    { "text": "我吃一碗饭。 (Wǒ chī yì wǎn fàn.)", "correct": true }
                ]
            },
            {
                "audioText": "你们喝几瓶啤酒？",
                "options": [
                    { "text": "我们喝几瓶啤酒？ (Wǒmen hē jǐ píng píjiǔ?)", "correct": false },
                    { "text": "你们喝几瓶啤酒？ (Nǐmen hē jǐ píng píjiǔ?)", "correct": true },
                    { "text": "你们喝几杯啤酒？ (Nǐmen hē jǐ bēi píjiǔ?)", "correct": false }
                ]
            },
            {
                "audioText": "我们喝两瓶啤酒。",
                "options": [
                    { "text": "我们喝两瓶啤酒。 (Wǒmen hē liǎng píng píjiǔ.)", "correct": true },
                    { "text": "我们喝一瓶啤酒。 (Wǒmen hē yì píng píjiǔ.)", "correct": false },
                    { "text": "他们喝两瓶啤酒。 (Tāmen hē liǎng píng píjiǔ.)", "correct": false }
                ]
            },
            {
                "audioText": "你有几个孩子？",
                "options": [
                    { "text": "他有几个孩子？ (Tā yǒu jǐ ge háizi?)", "correct": false },
                    { "text": "你有几个哥哥？ (Nǐ yǒu jǐ ge gēge?)", "correct": false },
                    { "text": "你有几个孩子？ (Nǐ yǒu jǐ ge háizi?)", "correct": true }
                ]
            },
            {
                "audioText": "我有一个孩子。",
                "options": [
                    { "text": "我有两个孩子。 (Wǒ yǒu liǎng ge háizi.)", "correct": false },
                    { "text": "我有一个孩子。 (Wǒ yǒu yí ge háizi.)", "correct": true },
                    { "text": "我有一个弟弟。 (Wǒ yǒu yí ge dìdi.)", "correct": false }
                ]
            },
            {
                "audioText": "你买几件衣服？",
                "options": [
                    { "text": "你买几件衣服？ (Nǐ mǎi jǐ jiàn yīfu?)", "correct": true },
                    { "text": "他买几件衣服？ (Tā mǎi jǐ jiàn yīfu?)", "correct": false },
                    { "text": "你买几本书？ (Nǐ mǎi jǐ běn shū?)", "correct": false }
                ]
            },
            {
                "audioText": "我买一件衣服。",
                "options": [
                    { "text": "我们买一件衣服。 (Wǒmen mǎi yí jiàn yīfu.)", "correct": false },
                    { "text": "我买两件衣服。 (Wǒ mǎi liǎng jiàn yīfu.)", "correct": false },
                    { "text": "我买一件衣服。 (Wǒ mǎi yí jiàn yīfu.)", "correct": true }
                ]
            },
            {
                "audioText": "老师有几本书？",
                "options": [
                    { "text": "老师有几本书？ (Lǎoshī yǒu jǐ běn shū?)", "correct": true },
                    { "text": "你有几本书？ (Nǐ yǒu jǐ běn shū?)", "correct": false },
                    { "text": "老师有几个朋友？ (Lǎoshī yǒu jǐ ge péngyou?)", "correct": false }
                ]
            },
            {
                "audioText": "老师有六本书。",
                "options": [
                    { "text": "老师有五本书。 (Lǎoshī yǒu wǔ běn shū.)", "correct": false },
                    { "text": "老师有六本书。 (Lǎoshī yǒu liù běn shū.)", "correct": true },
                    { "text": "老师有六支铅笔。 (Lǎoshī yǒu liù zhī qiānbǐ.)", "correct": false }
                ]
            },
            {
                "audioText": "妹妹喝几杯牛奶？",
                "options": [
                    { "text": "弟弟喝几杯牛奶？ (Dìdi hē jǐ bēi niúnǎi?)", "correct": false },
                    { "text": "妹妹喝几瓶牛奶？ (Mèimei hē jǐ píng niúnǎi?)", "correct": false },
                    { "text": "妹妹喝几杯牛奶？ (Mèimei hē jǐ bēi niúnǎi?)", "correct": true }
                ]
            },
            {
                "audioText": "妹妹喝两杯牛奶。",
                "options": [
                    { "text": "妹妹喝两杯果汁。 (Mèimei hē liǎng bēi guǒzhī.)", "correct": false },
                    { "text": "妹妹喝两杯牛奶。 (Mèimei hē liǎng bēi niúnǎi.)", "correct": true },
                    { "text": "妹妹吃三个面包。 (Mèimei chī sān ge miànbāo.)", "correct": false }
                ]
            },
            {
                "audioText": "哥哥吃几碗饭？",
                "options": [
                    { "text": "弟弟吃几碗饭？ (Dìdi chī jǐ wǎn fàn?)", "correct": false },
                    { "text": "哥哥吃几碗面？ (Gēge chī jǐ wǎn miàn?)", "correct": false },
                    { "text": "哥哥吃几碗饭？ (Gēge chī jǐ wǎn fàn?)", "correct": true }
                ]
            },
            {
                "audioText": "哥哥吃三碗饭。",
                "options": [
                    { "text": "哥哥吃三碗饭。 (Gēge chī sān wǎn fàn.)", "correct": true },
                    { "text": "哥哥吃两碗饭。 (Gēge chī liǎng wǎn fàn.)", "correct": false },
                    { "text": "哥哥吃三碗面。 (Gēge chī sān wǎn miàn.)", "correct": false }
                ]
            },
            {
                "audioText": "妈妈买几件衣服？",
                "options": [
                    { "text": "妈妈买几件衣服？ (Māma mǎi jǐ jiàn yīfu?)", "correct": true },
                    { "text": "爸爸买几件衣服？ (Bàba mǎi jǐ jiàn yīfu?)", "correct": false },
                    { "text": "你买几件衣服？ (Nǐ mǎi jǐ jiàn yīfu?)", "correct": false }
                ]
            },
            {
                "audioText": "妈妈买一件衣服。",
                "options": [
                    { "text": "妈妈买一件衣服。 (Māma mǎi yí jiàn yīfu.)", "correct": true },
                    { "text": "妈妈买两件衣服。 (Māma mǎi liǎng jiàn yīfu.)", "correct": false },
                    { "text": "妈妈买一本书。 (Māma mǎi yì běn shū.)", "correct": false }
                ]
            }
        ]
    }
];

async function loadDialogues() {
    console.log('Dialogues ready');
}

function renderConversationModule(container) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.maxWidth = '600px';
    container.appendChild(card);

    const lessonDialogues = dialogues.filter(d => d.lesson === currentLesson);

    if (!lessonDialogues.length) {
        card.innerHTML = '<p>이 과에는 회화 연습 데이터가 없습니다.</p>';
        return;
    }

    let currentDialogue = lessonDialogues[0]; // Can be expanded to select randomly or sequentially if multiple per lesson
    let currentStep = 0;

    function renderStep() {
        if (currentStep >= currentDialogue.steps.length) {
            card.innerHTML = `
        <h2>${currentDialogue.title}</h2>
        <p>모든 회화 연습을 완료했습니다!</p>
        <button id="restart-conv" style="margin-top:1rem; padding:0.5rem 1rem; background:var(--primary-color); color:var(--bg-color); border:none; border-radius:1rem; cursor:pointer; font-family: 'Inter', sans-serif;">다시 시작</button>
      `;
            card.querySelector('#restart-conv').onclick = () => { currentStep = 0; renderStep(); };
            return;
        }

        const step = currentDialogue.steps[currentStep];
        card.innerHTML = `
      <h2>${currentDialogue.title}</h2>
      
      <div id="audio-prompt-area" style="text-align:center; padding: 2rem 0;">
          <button id="play-step-audio" style="font-size:1.2rem; padding: 1rem 2rem; background: var(--primary-color); color:var(--bg-color); border:none; border-radius:2rem; cursor:pointer; display:flex; align-items:center; justify-content:center; margin: 0 auto; gap: 0.5rem; font-family: 'Inter', sans-serif;">
              ▶️ 음성 듣기
          </button>
      </div>

      <div id="hidden-conv-content" style="display:none; margin-top:1rem;">
          <p style="margin-bottom: 1rem; color: #aaa; font-family: 'Inter', sans-serif;">들은 문장과 일치하는 것을 고르세요:</p>
          <div class="quiz-options" style="font-family: 'SimHei', sans-serif;">
            ${step.options.map((opt, i) => `
              <button class="opt-btn" data-idx="${i}" style="text-align:left; padding:1rem; font-size:1.5rem;">${opt.text}</button>
            `).join('')}
          </div>
          <div id="conv-feedback" class="quiz-feedback" style="min-height:2rem; margin-top:1rem; font-family: 'Inter', sans-serif;"></div>
          <button id="next-conv" style="display:none; margin-top:1rem; padding:1rem; width:100%; background:var(--secondary-color); color:var(--text-color); border:1px solid var(--primary-color); border-radius:0.5rem; cursor:pointer; font-family: 'Inter', sans-serif;">다음 문제</button>
      </div>
    `;

        const playBtn = card.querySelector('#play-step-audio');
        const hiddenContent = card.querySelector('#hidden-conv-content');

        playBtn.onclick = () => {
            const utterance = new SpeechSynthesisUtterance(step.audioText);
            utterance.lang = 'zh-CN';
            utterance.rate = 0.85; // slightly slower for learners
            window.speechSynthesis.speak(utterance);

            // Reveal options after pressing play
            playBtn.textContent = '▶️ 다시 듣기';
            playBtn.style.padding = '0.5rem 1rem';
            playBtn.style.fontSize = '1rem';
            hiddenContent.style.display = 'block';
        };

        card.querySelectorAll('.opt-btn').forEach(btn => {
            btn.onclick = (e) => {
                card.querySelectorAll('.opt-btn').forEach(b => b.disabled = true);
                const idx = e.target.dataset.idx;
                const opt = step.options[idx];
                const feedback = card.querySelector('#conv-feedback');

                if (opt.correct) {
                    e.target.style.background = '#4caf50';
                    feedback.textContent = '정답입니다!';
                    feedback.className = 'quiz-feedback feedback-correct';
                    card.querySelector('#next-conv').style.display = 'block';
                } else {
                    e.target.style.background = '#f44336';
                    feedback.innerHTML = `틀렸습니다. 다시 시도해 보세요.`;
                    feedback.className = 'quiz-feedback feedback-wrong';
                    // Allow retry after 1.5 seconds
                    setTimeout(() => {
                        card.querySelectorAll('.opt-btn').forEach(b => {
                            b.disabled = false;
                            b.style.background = 'rgba(255, 255, 255, 0.08)';
                        });
                        feedback.textContent = '';
                    }, 1500);
                }
            };
        });

        card.querySelector('#next-conv').onclick = () => {
            currentStep++;
            renderStep();
        };
    }
    renderStep();
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
});
