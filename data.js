const DICTIONARY_DATA = {

            // ============================================
            // المدن — CITIES
            // ============================================
            cities: {
                nameAr: "المدن",
                nameEn: "Cities",
                emoji: "🏛️",
                entries: [
                    {
                        id: "babylon",
                        nameAr: "مدينة بابل",
                        nameAkk: "Babylone (Bābilu)",
                        description: "بابل — عاصمة الإمبراطورية البابلية وأعظم مدن العالم القديم. تقع على نهر الفرات في وسط العراق. اشتهرت بحدائقها المعلقة وبوابة عشتار وبرج بابل (زقورة إيتيمينانكي). حكمها ملوك عظام مثل حمورابي ونبوخذ نصر الثاني.",
                        sumerianReadings: [
                            { sumerian: "E-KI", cuneiform: "𒂍𒆠", labat: 308, labatPage: "E = Labat 308" },
                            { sumerian: "KÁ-DINGIR(-RA)", cuneiform: "𒆍𒀭𒊏", labat: 133, labatPage: "KÁ = Labat 133" },
                            { sumerian: "KÁ-DINGIR(-MEŠ)", cuneiform: "𒆍𒀭𒈨𒌍", labat: 133, labatPage: "KÁ = Labat 133" },
                            { sumerian: "KÁ-DIŠ(-DIŠ)", cuneiform: "𒆍𒁹𒁹", labat: 133, labatPage: "KÁ = Labat 133" },
                            { sumerian: "NUN", cuneiform: "𒉣", labat: 87, labatPage: "NUN = Labat 87" },
                            { sumerian: "ŠU-AN-NA", cuneiform: "𒋗𒀭𒈾", labat: 354, labatPage: "ŠU = Labat 354" },
                            { sumerian: "TIN-TIR", cuneiform: "𒁷𒌁", labat: 465, labatPage: "TIN = Labat 465" },
                            { sumerian: "(UD-)KIB-NUN", cuneiform: "𒌓𒄒𒉣", labat: 228, labatPage: "UD = Labat 228" }
                        ],
                        coordinates: { lat: 32.5421, lng: 44.4210 },
                        keywords: ["بابل", "babylon", "babil", "بابليون", "bābilu", "babilu", "باب ايلي"]
                    },
                    {
                        id: "nineveh",
                        nameAr: "مدينة نينوى",
                        nameAkk: "Ninua (Ninive)",
                        description: "نينوى — عاصمة الإمبراطورية الآشورية الجديدة، تقع على نهر دجلة في شمال العراق (الموصل حالياً). اشتهرت بمكتبة آشوربانيبال التي ضمت آلاف الألواح المسمارية. من أقدم وأعظم المدن في تاريخ بلاد الرافدين.",
                        sumerianReadings: [
                            { sumerian: "NINA", cuneiform: "𒀏", labat: 86, labatPage: "NINA = Labat 86" },
                            { sumerian: "NINA-KI", cuneiform: "𒀏𒆠", labat: 86, labatPage: "NINA = Labat 86" }
                        ],
                        coordinates: { lat: 36.3600, lng: 43.1530 },
                        keywords: ["نينوى", "nineveh", "ninua", "نينا", "ninive"]
                    },
                    {
                        id: "ur",
                        nameAr: "مدينة أور",
                        nameAkk: "Uru (Ur)",
                        description: "أور — من أقدم المدن السومرية، تقع في جنوب العراق. مسقط رأس النبي إبراهيم حسب التقاليد. اشتهرت بزقورتها العظيمة والمقبرة الملكية التي اكتُشفت فيها كنوز عظيمة. كانت عاصمة سلالة أور الثالثة.",
                        sumerianReadings: [
                            { sumerian: "URIM", cuneiform: "𒋀𒀊", labat: 395, labatPage: "ŠEŠ = Labat 395" },
                            { sumerian: "ŠEŠ-UNUG-KI", cuneiform: "𒋀𒀊𒆠", labat: 395, labatPage: "ŠEŠ = Labat 395" }
                        ],
                        coordinates: { lat: 30.9626, lng: 46.1031 },
                        keywords: ["أور", "ur", "uru", "اور", "urim"]
                    },
                    {
                        id: "uruk",
                        nameAr: "مدينة أوروك (الوركاء)",
                        nameAkk: "Uruk (Erech)",
                        description: "أوروك — من أقدم المدن في تاريخ البشرية، يُعتقد أنها المكان الذي اختُرعت فيه الكتابة المسمارية. مدينة الملك كلكامش الأسطوري. تقع في جنوب العراق وتُعرف حالياً بالوركاء. كانت من أكبر المدن في العالم القديم.",
                        sumerianReadings: [
                            { sumerian: "UNUG", cuneiform: "𒀸𒆠", labat: 78, labatPage: "UNUG = Labat 78" },
                            { sumerian: "UNUG-KI", cuneiform: "𒀸𒆠", labat: 78, labatPage: "UNUG = Labat 78" }
                        ],
                        coordinates: { lat: 31.3228, lng: 45.6367 },
                        keywords: ["أوروك", "الوركاء", "uruk", "erech", "unug", "وركاء"]
                    },
                    {
                        id: "nippur",
                        nameAr: "مدينة نيبور (نفّر)",
                        nameAkk: "Nibru (Nippur)",
                        description: "نيبور — المركز الديني الرئيسي لسومر وأكد، مقر الإله إنليل كبير الآلهة. تقع في وسط جنوب العراق. لم تكن عاصمة سياسية لكنها كانت أهم مركز ديني وثقافي. اكتُشفت فيها آلاف النصوص الأدبية السومرية.",
                        sumerianReadings: [
                            { sumerian: "NIBRU", cuneiform: "𒂗𒆤", labat: 79, labatPage: "EN = Labat 79" },
                            { sumerian: "EN-LÍL-KI", cuneiform: "𒂗𒆤𒆠", labat: 79, labatPage: "EN = Labat 79" }
                        ],
                        coordinates: { lat: 32.1264, lng: 45.2339 },
                        keywords: ["نيبور", "نفر", "nippur", "nibru", "نبرو"]
                    },
                    {
                        id: "eridu",
                        nameAr: "مدينة أريدو",
                        nameAkk: "Eridu",
                        description: "أريدو — أقدم مدينة في العالم حسب القوائم السومرية الملكية. تقع في أقصى جنوب العراق. كانت مقر الإله إنكي (إيا) إله الحكمة والمياه العذبة. تُعتبر مهد الحضارة السومرية.",
                        sumerianReadings: [
                            { sumerian: "NUN-KI", cuneiform: "𒉣𒆠", labat: 87, labatPage: "NUN = Labat 87" },
                            { sumerian: "ERIDUG", cuneiform: "𒉣𒆠", labat: 87, labatPage: "NUN = Labat 87" }
                        ],
                        coordinates: { lat: 30.8163, lng: 45.9943 },
                        keywords: ["أريدو", "eridu", "eridug", "اريدو"]
                    },
                    {
                        id: "ashur",
                        nameAr: "مدينة آشور",
                        nameAkk: "Aššur",
                        description: "آشور — العاصمة الأولى والمدينة المقدسة للإمبراطورية الآشورية. سُميت باسم الإله آشور. تقع على نهر دجلة في شمال العراق. كانت مركزاً تجارياً ودينياً مهماً منذ الألف الثالث قبل الميلاد.",
                        sumerianReadings: [
                            { sumerian: "BAL-TIL-KI", cuneiform: "𒁄𒌁𒆠", labat: 9, labatPage: "BAL = Labat 9" },
                            { sumerian: "ŠÀ-URU", cuneiform: "𒊮𒌷", labat: 353, labatPage: "ŠÀ = Labat 353" }
                        ],
                        coordinates: { lat: 35.4571, lng: 43.2593 },
                        keywords: ["آشور", "اشور", "ashur", "aššur", "assur"]
                    },
                    {
                        id: "lagash",
                        nameAr: "مدينة لجش",
                        nameAkk: "Lagaš",
                        description: "لجش — مدينة سومرية مهمة في جنوب العراق. اشتهرت بحاكمها كوديا الذي بنى معابد فخمة وترك نصوصاً أدبية راقية. كانت مركزاً فنياً وثقافياً مهماً في العصر السومري الحديث.",
                        sumerianReadings: [
                            { sumerian: "LAGAŠ", cuneiform: "𒉢𒁓𒆷", labat: 89, labatPage: "ŠIR = Labat 89" },
                            { sumerian: "ŠIR-BUR-LA-KI", cuneiform: "𒉢𒁓𒆷𒆠", labat: 89, labatPage: "ŠIR = Labat 89" }
                        ],
                        coordinates: { lat: 31.4069, lng: 46.4142 },
                        keywords: ["لجش", "lagash", "lagaš", "لكش"]
                    },
                    {
                        id: "sippar",
                        nameAr: "مدينة سبار",
                        nameAkk: "Sippar (Zimbir)",
                        description: "سبار — مدينة بابلية مهمة على نهر الفرات شمال بابل. كانت مقر معبد الإله شمش (إله الشمس). اكتُشفت فيها مكتبة كبيرة من الألواح المسمارية. سُميت بالسومرية بعلامات تشير إلى الشمس.",
                        sumerianReadings: [
                            { sumerian: "UD-KIB-NUN-KI", cuneiform: "𒌓𒄒𒉣𒆠", labat: 228, labatPage: "UD = Labat 228" },
                            { sumerian: "ZIMBIR", cuneiform: "𒌓𒄒𒉣𒆠", labat: 228, labatPage: "UD = Labat 228" }
                        ],
                        coordinates: { lat: 33.0606, lng: 44.2506 },
                        keywords: ["سبار", "sippar", "zimbir", "سيبار"]
                    },
                    {
                        id: "larsa",
                        nameAr: "مدينة لارسا",
                        nameAkk: "Larsa",
                        description: "لارسا — مدينة سومرية بابلية في جنوب العراق. كانت عاصمة مملكة قوية نافست بابل في عهد الملك ريم-سين. مقر معبد الإله شمش. سقطت أمام حمورابي ملك بابل.",
                        sumerianReadings: [
                            { sumerian: "UD-UNUG-KI", cuneiform: "𒌓𒀸𒆠", labat: 228, labatPage: "UD = Labat 228" }
                        ],
                        coordinates: { lat: 31.2844, lng: 45.8528 },
                        keywords: ["لارسا", "larsa", "لرسا"]
                    },
                    {
                        id: "mari",
                        nameAr: "مدينة ماري",
                        nameAkk: "Mari",
                        description: "ماري — مدينة قديمة على نهر الفرات في سوريا الحالية. كانت مركزاً تجارياً مهماً بين سومر والغرب. اكتُشف فيها أرشيف ضخم من الرسائل الملكية يكشف عن الحياة السياسية في الألف الثاني قبل الميلاد.",
                        sumerianReadings: [
                            { sumerian: "MA-RI-KI", cuneiform: "𒈠𒊑𒆠", labat: 342, labatPage: "MA = Labat 342" }
                        ],
                        coordinates: { lat: 34.5533, lng: 40.8861 },
                        keywords: ["ماري", "mari", "مارى"]
                    },
                    {
                        id: "akkad",
                        nameAr: "مدينة أكد",
                        nameAkk: "Akkade (Agade)",
                        description: "أكد — عاصمة الإمبراطورية الأكدية التي أسسها سرجون الأكدي أول إمبراطور في التاريخ. لم يُعثر على موقعها الحقيقي حتى الآن. أعطت اسمها للغة الأكدية وللحضارة الأكدية بأكملها.",
                        sumerianReadings: [
                            { sumerian: "A-GA-DÈ-KI", cuneiform: "𒀀𒂵𒉈𒆠", labat: 1, labatPage: "A = Labat 1" },
                            { sumerian: "URI-KI", cuneiform: "𒌵𒆠", labat: 395, labatPage: "URI = Labat 395" }
                        ],
                        coordinates: { lat: 33.1000, lng: 44.1000 },
                        keywords: ["أكد", "اكد", "akkad", "agade", "akkade", "اكاد"]
                    }
                ]
            },

            // ============================================
            // الآلهة — GODS
            // ============================================
            gods: {
                nameAr: "الآلهة",
                nameEn: "Gods",
                emoji: "⚡",
                entries: [
                    {
                        id: "anu",
                        nameAr: "الإله آنو",
                        nameAkk: "Anu (Anum)",
                        description: "آنو — إله السماء وملك الآلهة في المجمع السومري الأكدي. أب الآلهة العظام. مقره السماوي هو الأعلى بين جميع الآلهة. معبده الرئيسي 'إيانا' في مدينة أوروك.",
                        sumerianReadings: [
                            { sumerian: "AN", cuneiform: "𒀭", labat: 13, labatPage: "AN = Labat 13" },
                            { sumerian: "DINGIR", cuneiform: "𒀭", labat: 13, labatPage: "DINGIR = Labat 13" }
                        ],
                        keywords: ["آنو", "أنو", "anu", "anum", "انو", "إله السماء"]
                    },
                    {
                        id: "enlil",
                        nameAr: "الإله إنليل",
                        nameAkk: "Enlil (Ellil)",
                        description: "إنليل — إله الهواء والرياح والعواصف، ملك الآلهة الفعلي وحاكم الأرض. كان أقوى الآلهة في الفترة السومرية. مقره في مدينة نيبور في معبد 'إيكور'. هو الذي يمنح الملوكية.",
                        sumerianReadings: [
                            { sumerian: "EN-LÍL", cuneiform: "𒂗𒆤", labat: 79, labatPage: "EN = Labat 79" },
                            { sumerian: "dEN-LÍL", cuneiform: "𒀭𒂗𒆤", labat: 79, labatPage: "EN = Labat 79" }
                        ],
                        keywords: ["إنليل", "انليل", "enlil", "ellil", "إله الرياح"]
                    },
                    {
                        id: "enki",
                        nameAr: "الإله إنكي (إيا)",
                        nameAkk: "Ea (Enki)",
                        description: "إنكي/إيا — إله الحكمة والمياه العذبة والسحر والفنون. أحد الآلهة الثلاثة الكبار. أنقذ البشرية من الطوفان بتحذير أوتنابشتم. مقره في 'الأبسو' (المياه العذبة الجوفية) ومعبده 'إيأبسو' في أريدو.",
                        sumerianReadings: [
                            { sumerian: "EN-KI", cuneiform: "𒂗𒆠", labat: 79, labatPage: "EN = Labat 79" },
                            { sumerian: "dÉ-A", cuneiform: "𒀭𒂍𒀀", labat: 308, labatPage: "É = Labat 308" }
                        ],
                        keywords: ["إنكي", "إيا", "انكي", "ايا", "enki", "ea", "إله الحكمة"]
                    },
                    {
                        id: "marduk",
                        nameAr: "الإله مردوخ",
                        nameAkk: "Marduk (Bēl)",
                        description: "مردوخ — الإله الرئيسي لبابل وكبير الآلهة في الفترة البابلية. ابن إنكي. هزم تيامات (أم الفوضى) وخلق العالم من جسدها حسب ملحمة الخلق (إينوما إليش). معبده 'إيساكيلا' في بابل.",
                        sumerianReadings: [
                            { sumerian: "dAMAR-UTU", cuneiform: "𒀭𒀫𒌓", labat: 371, labatPage: "AMAR = Labat 371" },
                            { sumerian: "dŠÚ-PA-È", cuneiform: "𒀭𒋙𒉺𒂊", labat: 354, labatPage: "ŠÚ = Labat 354" }
                        ],
                        keywords: ["مردوخ", "مردوك", "marduk", "bēl", "bel", "إله بابل"]
                    },
                    {
                        id: "ishtar",
                        nameAr: "الإلهة عشتار (إنانا)",
                        nameAkk: "Ištar (Inanna)",
                        description: "عشتار/إنانا — إلهة الحب والحرب والخصوبة. أهم إلهة في بلاد الرافدين. نزلت إلى العالم السفلي لمواجهة أختها إرشكيجال. سُميت باسمها بوابة عشتار الشهيرة في بابل. مقرها معبد 'إيانا' في أوروك.",
                        sumerianReadings: [
                            { sumerian: "dINANNA", cuneiform: "𒀭𒈹", labat: 58, labatPage: "MÚŠ = Labat 58" },
                            { sumerian: "d15 (DIŠTAR)", cuneiform: "𒀭𒌋𒌋𒌋", labat: 480, labatPage: "DIŠ = Labat 480" }
                        ],
                        keywords: ["عشتار", "إنانا", "انانا", "ishtar", "inanna", "إلهة الحب"]
                    },
                    {
                        id: "shamash",
                        nameAr: "الإله شمش (أوتو)",
                        nameAkk: "Šamaš (Utu)",
                        description: "شمش/أوتو — إله الشمس والعدالة. يرى كل شيء في رحلته اليومية عبر السماء. أعطى قوانين العدالة للملك حمورابي. معبده 'إيبّارا' في مدينتي سبار ولارسا. ابن الإله سين (القمر).",
                        sumerianReadings: [
                            { sumerian: "dUTU", cuneiform: "𒀭𒌓", labat: 228, labatPage: "UTU = Labat 228" },
                            { sumerian: "UD", cuneiform: "𒀭𒌓", labat: 228, labatPage: "UD = Labat 228" }
                        ],
                        keywords: ["شمش", "أوتو", "اوتو", "shamash", "utu", "šamaš", "إله الشمس"]
                    },
                    {
                        id: "sin",
                        nameAr: "الإله سين (نانا)",
                        nameAkk: "Sîn (Nanna)",
                        description: "سين/نانا — إله القمر، من أهم الآلهة في بلاد الرافدين. أب الإله شمش (الشمس) وعشتار. معبده 'إيكشنوجال' في مدينة أور. كان مركز عبادته في حرّان أيضاً.",
                        sumerianReadings: [
                            { sumerian: "dNANNA", cuneiform: "𒀭𒋀𒆠", labat: 395, labatPage: "ŠEŠ = Labat 395" },
                            { sumerian: "d30", cuneiform: "𒀭𒌍", labat: 472, labatPage: "30 = Labat 472" }
                        ],
                        keywords: ["سين", "نانا", "sin", "nanna", "sîn", "إله القمر"]
                    },
                    {
                        id: "adad",
                        nameAr: "الإله أدد (إشكور)",
                        nameAkk: "Adad (Iškur)",
                        description: "أدد/إشكور — إله العواصف والرعد والمطر. يمكن أن يكون مدمراً أو خيّراً بحسب مشيئته. يُصوَّر ممسكاً بالصاعقة ويقف على ثور. مهم للزراعة لأنه يتحكم في الأمطار.",
                        sumerianReadings: [
                            { sumerian: "dIŠKUR", cuneiform: "𒀭𒅎", labat: 399, labatPage: "IM = Labat 399" },
                            { sumerian: "dIM", cuneiform: "𒀭𒅎", labat: 399, labatPage: "IM = Labat 399" }
                        ],
                        keywords: ["أدد", "إشكور", "ادد", "اشكور", "adad", "iškur", "ishkur", "إله العواصف"]
                    },
                    {
                        id: "nergal",
                        nameAr: "الإله نرجال",
                        nameAkk: "Nergal (Erra)",
                        description: "نرجال — إله العالم السفلي والأوبئة والحرب. زوج الإلهة إرشكيجال ملكة العالم السفلي. يُصوَّر كمحارب عنيف. ارتبط بالموت والدمار والطاعون. معبده 'إيمسلام' في مدينة كوثى.",
                        sumerianReadings: [
                            { sumerian: "dGÌR-UNUG-GAL", cuneiform: "𒀭𒄈𒀸𒃲", labat: 444, labatPage: "GÌR = Labat 444" },
                            { sumerian: "dU-GUR", cuneiform: "𒀭𒌑𒄥", labat: 411, labatPage: "U = Labat 411" }
                        ],
                        keywords: ["نرجال", "نركال", "nergal", "erra", "إله العالم السفلي"]
                    },
                    {
                        id: "nabu",
                        nameAr: "الإله نابو",
                        nameAkk: "Nabû",
                        description: "نابو — إله الكتابة والحكمة والعلم. ابن الإله مردوخ. كاتب الآلهة وحافظ ألواح الأقدار. معبده 'إيزيدا' في مدينة بورسيبا القريبة من بابل. كان يُحتفل به في عيد رأس السنة (أكيتو).",
                        sumerianReadings: [
                            { sumerian: "dAG", cuneiform: "𒀭𒀝", labat: 127, labatPage: "AG = Labat 127" },
                            { sumerian: "dPA", cuneiform: "𒀭𒉺", labat: 295, labatPage: "PA = Labat 295" }
                        ],
                        keywords: ["نابو", "نبو", "nabu", "nabû", "إله الكتابة"]
                    }
                ]
            },

            // ============================================
            // النجوم — STARS
            // ============================================
            stars: {
                nameAr: "النجوم",
                nameEn: "Stars",
                emoji: "⭐",
                entries: [
                    {
                        id: "sirius",
                        nameAr: "نجم الشعرى اليمانية (سيريوس)",
                        nameAkk: "Šukūdu (KAK.SI.SÁ)",
                        description: "الشعرى اليمانية — ألمع نجم في السماء. عُرف عند البابليين باسم 'السهم' (شوكودو). كان مهماً في التقويم الفلكي البابلي وارتبط بالإلهة عشتار.",
                        sumerianReadings: [
                            { sumerian: "mulKAK-SI-SÁ", cuneiform: "𒀭𒆕𒋛𒁲", labat: 230, labatPage: "KAK = Labat 230" }
                        ],
                        keywords: ["سيريوس", "الشعرى", "sirius", "šukūdu", "kaksi"]
                    },
                    {
                        id: "aldebaran",
                        nameAr: "نجم الدبران",
                        nameAkk: "Šūru (IS-LÈ)",
                        description: "الدبران — النجم الأحمر اللامع في كوكبة الثور. عُرف عند البابليين باسم 'عين الثور'. كان من النجوم المهمة في الرصد الفلكي البابلي.",
                        sumerianReadings: [
                            { sumerian: "mulIS-LÈ", cuneiform: "𒀭𒅖𒈖", labat: 357, labatPage: "IS = Labat 357" },
                            { sumerian: "mulGU₄-AN-NA", cuneiform: "𒀭𒄞𒀭𒈾", labat: 297, labatPage: "GU₄ = Labat 297" }
                        ],
                        keywords: ["الدبران", "aldebaran", "šūru", "عين الثور"]
                    },
                    {
                        id: "pleiades",
                        nameAr: "الثريا (نجوم الثريا)",
                        nameAkk: "Zappu (MUL.MUL)",
                        description: "الثريا — عنقود النجوم الشهير في كوكبة الثور. عُرف عند البابليين بـ'النجوم' (مول.مول) وتعني 'النجم من النجوم'. كان بداية الأبراج البابلية.",
                        sumerianReadings: [
                            { sumerian: "mulMUL-MUL", cuneiform: "𒀭𒀯𒀯", labat: 129, labatPage: "MUL = Labat 129" }
                        ],
                        keywords: ["الثريا", "pleiades", "zappu", "مول مول"]
                    },
                    {
                        id: "regulus",
                        nameAr: "نجم قلب الأسد",
                        nameAkk: "Šarru (LUGAL)",
                        description: "قلب الأسد — النجم اللامع في كوكبة الأسد. عُرف عند البابليين باسم 'الملك' (شرّو). كان يُعتبر نجماً ملكياً ومرتبطاً بالملوكية والسلطة.",
                        sumerianReadings: [
                            { sumerian: "mulLUGAL", cuneiform: "𒀭𒈗", labat: 266, labatPage: "LUGAL = Labat 266" },
                            { sumerian: "mulSHARRU", cuneiform: "𒀭𒈗", labat: 266, labatPage: "LUGAL = Labat 266" }
                        ],
                        keywords: ["قلب الأسد", "regulus", "šarru", "الملك", "lugal"]
                    }
                ]
            },

            // ============================================
            // الكواكب — PLANETS
            // ============================================
            planets: {
                nameAr: "الكواكب",
                nameEn: "Planets",
                emoji: "🪐",
                entries: [
                    {
                        id: "jupiter",
                        nameAr: "المشتري (نيبيرو/ساكوت)",
                        nameAkk: "Nēberu / Sagmegar",
                        description: "المشتري — أكبر كواكب المجموعة الشمسية. ارتبط عند البابليين بالإله مردوخ. كان يُسمى 'نيبيرو' (نقطة العبور) و'ساكميكار'. من أهم الكواكب في التنجيم البابلي.",
                        sumerianReadings: [
                            { sumerian: "mulSAG-ME-GAR", cuneiform: "𒀭𒊕𒈨𒃻", labat: 184, labatPage: "SAG = Labat 184" },
                            { sumerian: "mulNÉ-BI-RU", cuneiform: "𒀭𒉈𒁉𒊒", labat: 313, labatPage: "NÉ = Labat 313" }
                        ],
                        keywords: ["المشتري", "jupiter", "nēberu", "neberu", "sagmegar", "مردوخ كوكب"]
                    },
                    {
                        id: "venus",
                        nameAr: "الزهرة (دلبات)",
                        nameAkk: "Dilbat",
                        description: "الزهرة — ألمع الكواكب في السماء. ارتبط بالإلهة عشتار/إنانا. كان يظهر كنجم الصباح ونجم المساء. كان له أهمية كبيرة في التنجيم والطقوس الدينية البابلية.",
                        sumerianReadings: [
                            { sumerian: "mulDIL-BAT", cuneiform: "𒀭𒀸𒁀", labat: 78, labatPage: "DIL = Labat 78" },
                            { sumerian: "mulDILI-PAT", cuneiform: "𒀭𒀸𒁀", labat: 78, labatPage: "DIL = Labat 78" }
                        ],
                        keywords: ["الزهرة", "venus", "dilbat", "دلبات", "نجم عشتار"]
                    },
                    {
                        id: "saturn",
                        nameAr: "زحل (كيمانو)",
                        nameAkk: "Kayyamānu",
                        description: "زحل — الكوكب البطيء الحركة. ارتبط عند البابليين بالإله نينورتا أو شمش. سُمي 'كيمانو' أي 'الثابت' لبطء حركته الظاهرية. كان مهماً في التنبؤات الفلكية.",
                        sumerianReadings: [
                            { sumerian: "mulGENNA", cuneiform: "𒀭𒄀𒈾", labat: 441, labatPage: "GI = Labat 441" },
                            { sumerian: "mulUDU-IDIM-SAG-UŠ", cuneiform: "𒀭𒇽𒅂𒊕𒍑", labat: 420, labatPage: "UDU = Labat 420" }
                        ],
                        keywords: ["زحل", "saturn", "kayyamānu", "كيمانو", "genna"]
                    },
                    {
                        id: "mars",
                        nameAr: "المريخ (صلبتانو)",
                        nameAkk: "Ṣalbatānu",
                        description: "المريخ — الكوكب الأحمر. ارتبط بالإله نرجال إله الحرب والموت. سُمي 'صلبتانو'. كان ظهوره يُعتبر نذير شؤم في التنجيم البابلي ومرتبطاً بالحروب والأوبئة.",
                        sumerianReadings: [
                            { sumerian: "mulṢAL-BAT-A-NI", cuneiform: "𒀭𒊩𒁀𒀀𒉌", labat: 493, labatPage: "ṢAL = Labat 493" },
                            { sumerian: "mulAN-GE₆", cuneiform: "𒀭𒀭𒈪", labat: 13, labatPage: "AN = Labat 13" }
                        ],
                        keywords: ["المريخ", "mars", "ṣalbatānu", "صلبتانو", "نرجال كوكب"]
                    },
                    {
                        id: "mercury",
                        nameAr: "عطارد (شيخوتو)",
                        nameAkk: "Šiḫṭu",
                        description: "عطارد — أصغر الكواكب وأقربها إلى الشمس. ارتبط بالإله نابو إله الكتابة. كان صعب الرصد بسبب قربه من الشمس. سُمي 'شيخطو' أي 'القافز'.",
                        sumerianReadings: [
                            { sumerian: "mulUDU-IDIM-GU₄-UD", cuneiform: "𒀭𒇽𒅂𒄞𒌓", labat: 420, labatPage: "UDU = Labat 420" },
                            { sumerian: "mulGU₄-UD", cuneiform: "𒀭𒄞𒌓", labat: 297, labatPage: "GU₄ = Labat 297" }
                        ],
                        keywords: ["عطارد", "mercury", "šiḫṭu", "شيخطو", "نابو كوكب"]
                    }
                ]
            },

            // ============================================
            // الأشهر — MONTHS
            // ============================================
            months: {
                nameAr: "الأشهر",
                nameEn: "Months",
                emoji: "📅",
                entries: [
                    {
                        id: "nisannu",
                        nameAr: "نيسان (الشهر الأول)",
                        nameAkk: "Nisannu",
                        description: "نيسان — الشهر الأول في التقويم البابلي (مارس-أبريل). شهر عيد رأس السنة (أكيتو) حيث تُتلى ملحمة الخلق 'إينوما إليش'. بداية الربيع والسنة الجديدة.",
                        sumerianReadings: [
                            { sumerian: "ITI-BARAG-ZAG-GAR", cuneiform: "𒌗𒁈𒍠𒃻", labat: 92, labatPage: "BARAG = Labat 92" }
                        ],
                        keywords: ["نيسان", "nisannu", "الشهر الأول", "أكيتو"]
                    },
                    {
                        id: "ayyaru",
                        nameAr: "أيار (الشهر الثاني)",
                        nameAkk: "Ayyāru",
                        description: "أيار — الشهر الثاني في التقويم البابلي (أبريل-مايو). شهر مرتبط بالثور والزراعة. كان وقت الحصاد الأول في بلاد الرافدين.",
                        sumerianReadings: [
                            { sumerian: "ITI-GU₄-SI-SÁ", cuneiform: "𒌗𒄞𒋛𒁲", labat: 297, labatPage: "GU₄ = Labat 297" }
                        ],
                        keywords: ["أيار", "ayyāru", "ayyaru", "الشهر الثاني"]
                    },
                    {
                        id: "simanu",
                        nameAr: "سيوان (الشهر الثالث)",
                        nameAkk: "Simānu",
                        description: "سيوان — الشهر الثالث في التقويم البابلي (مايو-يونيو). مرتبط بموسم الحصاد والطقوس الزراعية.",
                        sumerianReadings: [
                            { sumerian: "ITI-SIG₄-GA", cuneiform: "𒌗𒋞𒂵", labat: 384, labatPage: "SIG₄ = Labat 384" }
                        ],
                        keywords: ["سيوان", "simānu", "simanu", "الشهر الثالث"]
                    },
                    {
                        id: "duzu",
                        nameAr: "تموز (الشهر الرابع)",
                        nameAkk: "Du'ūzu (Tammūz)",
                        description: "تموز — الشهر الرابع في التقويم البابلي (يونيو-يوليو). سُمي باسم الإله تموز/دموزي حبيب عشتار الذي نزل إلى العالم السفلي. شهر الحداد والبكاء على تموز.",
                        sumerianReadings: [
                            { sumerian: "ITI-ŠU-NUMUN", cuneiform: "𒌗𒋗𒆰", labat: 354, labatPage: "ŠU = Labat 354" }
                        ],
                        keywords: ["تموز", "duzu", "du'ūzu", "tammūz", "الشهر الرابع", "دموزي"]
                    },
                    {
                        id: "abu",
                        nameAr: "آب (الشهر الخامس)",
                        nameAkk: "Abu",
                        description: "آب — الشهر الخامس في التقويم البابلي (يوليو-أغسطس). أحر أشهر السنة. كانت تُقام فيه طقوس خاصة بالنار والحرارة.",
                        sumerianReadings: [
                            { sumerian: "ITI-NE-NE-GAR", cuneiform: "𒌗𒉈𒉈𒃻", labat: 313, labatPage: "NE = Labat 313" }
                        ],
                        keywords: ["آب", "abu", "الشهر الخامس"]
                    },
                    {
                        id: "ululu",
                        nameAr: "أيلول (الشهر السادس)",
                        nameAkk: "Ulūlu (Elūlu)",
                        description: "أيلول — الشهر السادس في التقويم البابلي (أغسطس-سبتمبر). شهر التنقية والتطهير. بداية موسم الخريف.",
                        sumerianReadings: [
                            { sumerian: "ITI-KIN-dINANNA", cuneiform: "𒌗𒆥𒀭𒈹", labat: 440, labatPage: "KIN = Labat 440" }
                        ],
                        keywords: ["أيلول", "ulūlu", "ululu", "الشهر السادس"]
                    },
                    {
                        id: "tashritu",
                        nameAr: "تشرين (الشهر السابع)",
                        nameAkk: "Tašrītu",
                        description: "تشرين — الشهر السابع في التقويم البابلي (سبتمبر-أكتوبر). شهر البدايات والانطلاقات. كان يُقام فيه عيد أكيتو الخريفي في بعض المدن.",
                        sumerianReadings: [
                            { sumerian: "ITI-DU₆-KÙ", cuneiform: "𒌗𒇯𒆬", labat: 207, labatPage: "DU₆ = Labat 207" }
                        ],
                        keywords: ["تشرين", "tašrītu", "tashritu", "الشهر السابع"]
                    },
                    {
                        id: "arahsamna",
                        nameAr: "مرحشوان (الشهر الثامن)",
                        nameAkk: "Araḫsamna",
                        description: "مرحشوان — الشهر الثامن في التقويم البابلي (أكتوبر-نوفمبر). شهر بداية الأمطار والزراعة الشتوية في بلاد الرافدين.",
                        sumerianReadings: [
                            { sumerian: "ITI-APIN-DU₈-A", cuneiform: "𒌗𒀳𒃮𒀀", labat: 100, labatPage: "APIN = Labat 100" }
                        ],
                        keywords: ["مرحشوان", "araḫsamna", "arahsamna", "الشهر الثامن"]
                    },
                    {
                        id: "kislimu",
                        nameAr: "كسليم (الشهر التاسع)",
                        nameAkk: "Kislīmu",
                        description: "كسليم — الشهر التاسع في التقويم البابلي (نوفمبر-ديسمبر). شهر البرد والشتاء. كانت تُقام فيه طقوس دينية خاصة.",
                        sumerianReadings: [
                            { sumerian: "ITI-GAN-GAN-È", cuneiform: "𒌗𒃶𒃶𒂊", labat: 253, labatPage: "GAN = Labat 253" }
                        ],
                        keywords: ["كسليم", "kislīmu", "kislimu", "الشهر التاسع"]
                    },
                    {
                        id: "tebetu",
                        nameAr: "طيبت (الشهر العاشر)",
                        nameAkk: "Ṭebētu",
                        description: "طيبت — الشهر العاشر في التقويم البابلي (ديسمبر-يناير). أبرد أشهر السنة. مرتبط بالانقلاب الشتوي.",
                        sumerianReadings: [
                            { sumerian: "ITI-AB-BA-È", cuneiform: "𒌗𒀊𒁀𒂊", labat: 128, labatPage: "AB = Labat 128" }
                        ],
                        keywords: ["طيبت", "ṭebētu", "tebetu", "الشهر العاشر"]
                    },
                    {
                        id: "shabatu",
                        nameAr: "شباط (الشهر الحادي عشر)",
                        nameAkk: "Šabāṭu",
                        description: "شباط — الشهر الحادي عشر في التقويم البابلي (يناير-فبراير). شهر الرياح والعواصف. اسمه يعني 'الضرب' إشارة إلى قسوة الطقس.",
                        sumerianReadings: [
                            { sumerian: "ITI-ZÍZ-A", cuneiform: "𒌗𒍣𒀀", labat: 210, labatPage: "ZÍZ = Labat 210" }
                        ],
                        keywords: ["شباط", "šabāṭu", "shabatu", "الشهر الحادي عشر"]
                    },
                    {
                        id: "addaru",
                        nameAr: "آذار (الشهر الثاني عشر)",
                        nameAkk: "Addaru (Adāru)",
                        description: "آذار — الشهر الثاني عشر والأخير في التقويم البابلي (فبراير-مارس). شهر نهاية السنة والاستعداد للسنة الجديدة. كان يُضاف شهر آذار ثانٍ أحياناً لتعديل التقويم.",
                        sumerianReadings: [
                            { sumerian: "ITI-ŠE-KIN-KUD", cuneiform: "𒌗𒊺𒆥𒃮", labat: 367, labatPage: "ŠE = Labat 367" }
                        ],
                        keywords: ["آذار", "addaru", "adāru", "adaru", "الشهر الثاني عشر"]
                    }
                ]
            },

            // ============================================
            // العفاريت والشياطين — DEMONS
            // ============================================
            demons: {
                nameAr: "العفاريت والشياطين",
                nameEn: "Demons",
                emoji: "👹",
                entries: [
                    {
                        id: "lamashtu",
                        nameAr: "لماشتو",
                        nameAkk: "Lamaštu",
                        description: "لماشتو — أخطر العفاريت الأنثوية في بلاد الرافدين. تهدد النساء الحوامل والأطفال الرضع. ابنة الإله آنو. كانت تُصوَّر برأس أسد وجسم حمار وأقدام طائر. كانت التمائم والتعاويذ ضرورية للحماية منها.",
                        sumerianReadings: [
                            { sumerian: "dDÌM-ME", cuneiform: "𒀭𒁴𒈨", labat: 167, labatPage: "DÌM = Labat 167" }
                        ],
                        keywords: ["لماشتو", "lamaštu", "lamashtu", "عفريتة"]
                    },
                    {
                        id: "pazuzu",
                        nameAr: "بازوزو",
                        nameAkk: "Pazuzu",
                        description: "بازوزو — ملك شياطين الرياح. كائن مخيف له وجه وحشي وأجنحة وذيل عقرب ومخالب. ورغم طبيعته الشريرة استُخدمت صوره كتمائم حماية ضد لماشتو. 'ملك شياطين الرياح الشريرة'.",
                        sumerianReadings: [
                            { sumerian: "dPA-ZU-ZU", cuneiform: "𒀭𒉺𒍪𒍪", labat: 295, labatPage: "PA = Labat 295" }
                        ],
                        keywords: ["بازوزو", "pazuzu", "ملك الشياطين", "شيطان الرياح"]
                    },
                    {
                        id: "utukku",
                        nameAr: "أوتوكو (الأوتوكو الشرير)",
                        nameAkk: "Utukku lemnu",
                        description: "أوتوكو — نوع من الشياطين أو الأرواح الشريرة التي تسكن الأماكن المهجورة والصحارى. يمكن أن تكون خيرة أو شريرة. 'الأوتوكو الشرير' (أوتوكو ليمنو) كان من أخطر الكائنات الخارقة.",
                        sumerianReadings: [
                            { sumerian: "UDUG", cuneiform: "𒌜", labat: 451, labatPage: "UDUG = Labat 451" },
                            { sumerian: "UDUG-ḪUL", cuneiform: "𒌜𒅆𒌨", labat: 451, labatPage: "UDUG = Labat 451" }
                        ],
                        keywords: ["أوتوكو", "utukku", "udug", "شيطان", "روح شريرة"]
                    },
                    {
                        id: "alu",
                        nameAr: "آلو",
                        nameAkk: "Alû",
                        description: "آلو — شيطان بلا وجه وبلا فم وبلا أذن. يختبئ في الزوايا المظلمة ويهاجم الناس في الليل. كان يُعتبر من أكثر الشياطين رعباً لأنه يسلب الناس نومهم وعقولهم.",
                        sumerianReadings: [
                            { sumerian: "A-LÁ", cuneiform: "𒀀𒇲", labat: 1, labatPage: "A = Labat 1" }
                        ],
                        keywords: ["آلو", "alû", "alu", "شيطان بلا وجه"]
                    },
                    {
                        id: "gallu",
                        nameAr: "غالو (الغالو)",
                        nameAkk: "Gallû",
                        description: "غالو — شياطين العالم السفلي الذين يقتادون الموتى. هم الذين أسروا الإله تموز/دموزي بدلاً من عشتار عند صعودها من العالم السفلي. لا يعرفون الرحمة ولا يأكلون ولا يشربون.",
                        sumerianReadings: [
                            { sumerian: "GALLA", cuneiform: "𒃲𒆷", labat: 343, labatPage: "GAL = Labat 343" }
                        ],
                        keywords: ["غالو", "gallû", "gallu", "galla", "شياطين العالم السفلي"]
                    },
                    {
                        id: "rabisu",
                        nameAr: "رابصو (الكامن)",
                        nameAkk: "Rābiṣu",
                        description: "رابصو — شيطان يكمن في المداخل والأزقة والعتبات. يُترجم اسمه بـ'الكامن' أو 'المتربص'. كان يُعتقد أنه يتربص بالناس عند أبواب المنازل والمعابد.",
                        sumerianReadings: [
                            { sumerian: "MÁŠKIM", cuneiform: "𒈦𒆳", labat: 340, labatPage: "MAŠ = Labat 340" }
                        ],
                        keywords: ["رابصو", "rābiṣu", "rabisu", "maškim", "الكامن", "المتربص"]
                    },
                    {
                        id: "lilitu",
                        nameAr: "ليليتو (ليليث)",
                        nameAkk: "Lilītu (Lilitû)",
                        description: "ليليتو — روح أنثوية ليلية شريرة مرتبطة بالرياح والعواصف الليلية. اسمها مشتق من 'ليل' (الليل). تغوي الرجال في أحلامهم. أصل أسطورة ليليث في التقاليد اللاحقة.",
                        sumerianReadings: [
                            { sumerian: "KI-SIKIL-LÍL-LÁ", cuneiform: "𒆠𒂖𒆤𒇲", labat: 366, labatPage: "KI = Labat 366" }
                        ],
                        keywords: ["ليليتو", "ليليث", "lilītu", "lilitu", "lilitû", "lilith", "روح ليلية"]
                    },
                    {
                        id: "asakku",
                        nameAr: "أساكو",
                        nameAkk: "Asakku",
                        description: "أساكو — شيطان المرض والحمى. كان يُعتقد أنه يسبب الأوبئة والأمراض الخطيرة. هزمه الإله نينورتا في معركة أسطورية مشهورة وصلتنا في نص 'لوغال-إي'.",
                        sumerianReadings: [
                            { sumerian: "À-SÀG", cuneiform: "𒀀𒊮", labat: 1, labatPage: "À = Labat 1" }
                        ],
                        keywords: ["أساكو", "asakku", "شيطان المرض", "asag"]
                    }
                ]
            }
        };
