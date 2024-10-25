const sampleTrailData = {
    name: "Smith Rock Loop",
    length: 6.2,
    Difficulty: "Hard",
    data: [
      { lon: -121.13702, lat: 44.36613, ele: 864 },
      { lon: -121.13708, lat: 44.36621, ele: 863 },
      { lon: -121.13713, lat: 44.36634, ele: 862 },
      { lon: -121.13719, lat: 44.36641, ele: 862 },
      { lon: -121.13723, lat: 44.36644, ele: 861 },
      { lon: -121.13729, lat: 44.36646, ele: 860 },
      { lon: -121.13741, lat: 44.36649, ele: 858 },
      { lon: -121.13735, lat: 44.36664, ele: 859 },
      { lon: -121.13725, lat: 44.3668, ele: 859 },
      { lon: -121.13724, lat: 44.36686, ele: 859 },
      { lon: -121.13721, lat: 44.36692, ele: 859 },
      { lon: -121.13717, lat: 44.36699, ele: 858 },
      { lon: -121.13717, lat: 44.36702, ele: 858 },
      { lon: -121.1372, lat: 44.36718, ele: 855 },
      { lon: -121.13734, lat: 44.36716, ele: 852 },
      { lon: -121.1377, lat: 44.36705, ele: 845 },
      { lon: -121.13776, lat: 44.36701, ele: 845 },
      { lon: -121.13781, lat: 44.36698, ele: 844 },
      { lon: -121.13783, lat: 44.36694, ele: 844 },
      { lon: -121.13785, lat: 44.3669, ele: 844 },
      { lon: -121.13789, lat: 44.36667, ele: 846 },
      { lon: -121.13791, lat: 44.3666, ele: 846 },
      { lon: -121.13796, lat: 44.36652, ele: 845 },
      { lon: -121.13804, lat: 44.36644, ele: 843 },
      { lon: -121.13811, lat: 44.36644, ele: 841 },
      { lon: -121.13816, lat: 44.36643, ele: 838 },
      { lon: -121.13823, lat: 44.3664, ele: 836 },
      { lon: -121.13825, lat: 44.3664, ele: 835 },
      { lon: -121.13826, lat: 44.36641, ele: 834 },
      { lon: -121.13823, lat: 44.36649, ele: 835 },
      { lon: -121.13823, lat: 44.3665, ele: 835 },
      { lon: -121.13824, lat: 44.36652, ele: 834 },
      { lon: -121.13827, lat: 44.36652, ele: 833 },
      { lon: -121.13828, lat: 44.36651, ele: 832 },
      { lon: -121.13855, lat: 44.36642, ele: 823 },
      { lon: -121.1385, lat: 44.3666, ele: 823 },
      { lon: -121.13854, lat: 44.36669, ele: 821 },
      { lon: -121.13861, lat: 44.36689, ele: 818 },
      { lon: -121.13874, lat: 44.36706, ele: 816 },
      { lon: -121.13882, lat: 44.36726, ele: 815 },
      { lon: -121.13883, lat: 44.36728, ele: 815 },
      { lon: -121.13892, lat: 44.36742, ele: 815 },
      { lon: -121.13896, lat: 44.36771, ele: 814 },
      { lon: -121.13901, lat: 44.36781, ele: 815 },
      { lon: -121.13925, lat: 44.36804, ele: 823 },
      { lon: -121.13928, lat: 44.36808, ele: 827 },
      { lon: -121.13927, lat: 44.36812, ele: 830 },
      { lon: -121.13933, lat: 44.3682, ele: 847 },
      { lon: -121.13937, lat: 44.3682, ele: 854 },
      { lon: -121.13941, lat: 44.3682, ele: 860 },
      { lon: -121.1394, lat: 44.36825, ele: 868 },
      { lon: -121.1394, lat: 44.36827, ele: 871 },
      { lon: -121.13947, lat: 44.36826, ele: 880 },
      { lon: -121.13954, lat: 44.36826, ele: 884 },
      { lon: -121.13957, lat: 44.36827, ele: 888 },
      { lon: -121.13958, lat: 44.36829, ele: 892 },
      { lon: -121.13957, lat: 44.3683, ele: 894 },
      { lon: -121.13943, lat: 44.36834, ele: 891 },
      { lon: -121.13947, lat: 44.36836, ele: 895 },
      { lon: -121.13951, lat: 44.36837, ele: 897 },
      { lon: -121.13962, lat: 44.36837, ele: 904 },
      { lon: -121.13966, lat: 44.36837, ele: 906 },
      { lon: -121.13967, lat: 44.36839, ele: 908 },
      { lon: -121.13956, lat: 44.36844, ele: 900 },
      { lon: -121.13951, lat: 44.36847, ele: 894 },
      { lon: -121.13952, lat: 44.36848, ele: 895 },
      { lon: -121.13961, lat: 44.36847, ele: 906 },
      { lon: -121.13967, lat: 44.36847, ele: 913 },
      { lon: -121.1397, lat: 44.36849, ele: 918 },
      { lon: -121.13964, lat: 44.36852, ele: 912 },
      { lon: -121.13949, lat: 44.36858, ele: 887 },
      { lon: -121.13947, lat: 44.36859, ele: 883 },
      { lon: -121.13951, lat: 44.36863, ele: 890 },
      { lon: -121.13937, lat: 44.36866, ele: 867 },
      { lon: -121.13928, lat: 44.36869, ele: 856 },
      { lon: -121.13918, lat: 44.36876, ele: 846 },
      { lon: -121.13928, lat: 44.3688, ele: 859 },
      { lon: -121.13918, lat: 44.36893, ele: 857 },
      { lon: -121.13917, lat: 44.36905, ele: 871 },
      { lon: -121.13905, lat: 44.36912, ele: 869 },
      { lon: -121.1389, lat: 44.3692, ele: 860 },
      { lon: -121.13901, lat: 44.36922, ele: 874 },
      { lon: -121.13886, lat: 44.3693, ele: 867 },
      { lon: -121.13882, lat: 44.36934, ele: 867 },
      { lon: -121.13884, lat: 44.36936, ele: 871 },
      { lon: -121.1389, lat: 44.36939, ele: 879 },
      { lon: -121.13891, lat: 44.36941, ele: 883 },
      { lon: -121.1389, lat: 44.36944, ele: 884 },
      { lon: -121.13893, lat: 44.36952, ele: 898 },
      { lon: -121.13893, lat: 44.36964, ele: 914 },
      { lon: -121.13893, lat: 44.36975, ele: 927 },
      { lon: -121.13901, lat: 44.36995, ele: 949 },
      { lon: -121.13906, lat: 44.37001, ele: 953 },
      { lon: -121.13916, lat: 44.37012, ele: 934 },
      { lon: -121.13922, lat: 44.37019, ele: 923 },
      { lon: -121.13926, lat: 44.37026, ele: 912 },
      { lon: -121.13933, lat: 44.37036, ele: 902 },
      { lon: -121.13933, lat: 44.37037, ele: 901 },
      { lon: -121.13932, lat: 44.37041, ele: 896 },
      { lon: -121.13933, lat: 44.37046, ele: 890 },
      { lon: -121.13937, lat: 44.37053, ele: 883 },
      { lon: -121.13943, lat: 44.37063, ele: 882 },
      { lon: -121.13952, lat: 44.37072, ele: 887 },
      { lon: -121.13961, lat: 44.37078, ele: 891 },
      { lon: -121.13968, lat: 44.37082, ele: 893 },
      { lon: -121.13984, lat: 44.37091, ele: 900 },
      { lon: -121.14011, lat: 44.37107, ele: 918 },
      { lon: -121.14026, lat: 44.37118, ele: 924 },
      { lon: -121.14047, lat: 44.37135, ele: 924 },
      { lon: -121.14054, lat: 44.37143, ele: 922 },
      { lon: -121.14056, lat: 44.37139, ele: 923 },
      { lon: -121.14055, lat: 44.37127, ele: 936 },
      { lon: -121.14065, lat: 44.37136, ele: 930 },
      { lon: -121.14064, lat: 44.37125, ele: 942 },
      { lon: -121.14073, lat: 44.37132, ele: 937 },
      { lon: -121.14074, lat: 44.37136, ele: 933 },
      { lon: -121.14075, lat: 44.37137, ele: 932 },
      { lon: -121.14074, lat: 44.37121, ele: 951 },
      { lon: -121.1408, lat: 44.37129, ele: 944 },
      { lon: -121.14087, lat: 44.37118, ele: 960 },
      { lon: -121.14093, lat: 44.37109, ele: 973 },
      { lon: -121.14093, lat: 44.37095, ele: 987 },
      { lon: -121.14094, lat: 44.37087, ele: 996 },
      { lon: -121.14095, lat: 44.37083, ele: 1001 },
      { lon: -121.14093, lat: 44.37069, ele: 1004 },
      { lon: -121.141, lat: 44.37078, ele: 1004 },
      { lon: -121.141, lat: 44.37067, ele: 1007 },
      { lon: -121.14107, lat: 44.37076, ele: 1007 },
      { lon: -121.14105, lat: 44.37063, ele: 1008 },
      { lon: -121.14099, lat: 44.37052, ele: 1010 },
      { lon: -121.14093, lat: 44.37044, ele: 1010 },
      { lon: -121.14086, lat: 44.37037, ele: 1009 },
      { lon: -121.14092, lat: 44.37036, ele: 1010 },
      { lon: -121.14084, lat: 44.37032, ele: 1008 },
      { lon: -121.14093, lat: 44.37032, ele: 1011 },
      { lon: -121.14091, lat: 44.37019, ele: 1009 },
      { lon: -121.14086, lat: 44.37012, ele: 1006 },
      { lon: -121.14079, lat: 44.37007, ele: 1003 },
      { lon: -121.14078, lat: 44.37001, ele: 1002 },
      { lon: -121.14071, lat: 44.36997, ele: 1001 },
      { lon: -121.1407, lat: 44.36995, ele: 1001 },
      { lon: -121.14067, lat: 44.36988, ele: 1001 },
      { lon: -121.1407, lat: 44.36977, ele: 1002 },
      { lon: -121.14072, lat: 44.36958, ele: 1001 },
      { lon: -121.14073, lat: 44.36949, ele: 1000 },
      { lon: -121.14083, lat: 44.36941, ele: 1001 },
      { lon: -121.14106, lat: 44.36928, ele: 1000 },
      { lon: -121.14118, lat: 44.36932, ele: 1001 },
      { lon: -121.14135, lat: 44.36942, ele: 1003 },
      { lon: -121.14144, lat: 44.36948, ele: 1005 },
      { lon: -121.14162, lat: 44.36961, ele: 1009 },
      { lon: -121.14171, lat: 44.36964, ele: 1010 },
      { lon: -121.14179, lat: 44.36964, ele: 1009 },
      { lon: -121.14187, lat: 44.36965, ele: 1009 },
      { lon: -121.14206, lat: 44.36971, ele: 1008 },
      { lon: -121.14223, lat: 44.36975, ele: 1003 },
      { lon: -121.14228, lat: 44.36979, ele: 1000 },
      { lon: -121.14231, lat: 44.36982, ele: 999 },
      { lon: -121.14233, lat: 44.36983, ele: 998 },
      { lon: -121.14245, lat: 44.36992, ele: 994 },
      { lon: -121.1424, lat: 44.36998, ele: 997 },
      { lon: -121.14234, lat: 44.37003, ele: 1000 },
      { lon: -121.14217, lat: 44.37002, ele: 1006 },
      { lon: -121.14212, lat: 44.37003, ele: 1008 },
      { lon: -121.14204, lat: 44.3701, ele: 1010 },
      { lon: -121.14213, lat: 44.3701, ele: 1008 },
      { lon: -121.14219, lat: 44.3701, ele: 1006 },
      { lon: -121.14216, lat: 44.37012, ele: 1007 },
      { lon: -121.1421, lat: 44.37024, ele: 1008 },
      { lon: -121.14217, lat: 44.37021, ele: 1006 },
      { lon: -121.1423, lat: 44.37018, ele: 1002 },
      { lon: -121.14228, lat: 44.37027, ele: 1003 },
      { lon: -121.14225, lat: 44.37036, ele: 1000 },
      { lon: -121.1425, lat: 44.37027, ele: 994 },
      { lon: -121.14229, lat: 44.37062, ele: 983 },
      { lon: -121.14233, lat: 44.37087, ele: 958 },
      { lon: -121.14239, lat: 44.371, ele: 956 },
      { lon: -121.14244, lat: 44.37087, ele: 951 },
      { lon: -121.14255, lat: 44.37076, ele: 954 },
      { lon: -121.14283, lat: 44.37062, ele: 959 },
      { lon: -121.14307, lat: 44.37054, ele: 951 },
      { lon: -121.14298, lat: 44.37066, ele: 947 },
      { lon: -121.14296, lat: 44.37076, ele: 938 },
      { lon: -121.14297, lat: 44.37095, ele: 927 },
      { lon: -121.14296, lat: 44.37095, ele: 927 },
      { lon: -121.14309, lat: 44.37113, ele: 916 },
      { lon: -121.14316, lat: 44.37101, ele: 918 },
      { lon: -121.14332, lat: 44.37088, ele: 918 },
      { lon: -121.1434, lat: 44.37084, ele: 915 },
      { lon: -121.14347, lat: 44.37079, ele: 914 },
      { lon: -121.1435, lat: 44.37073, ele: 916 },
      { lon: -121.14356, lat: 44.37068, ele: 916 },
      { lon: -121.14364, lat: 44.37066, ele: 914 },
      { lon: -121.14371, lat: 44.37065, ele: 910 },
      { lon: -121.14373, lat: 44.3707, ele: 905 },
      { lon: -121.14373, lat: 44.37074, ele: 902 },
      { lon: -121.14374, lat: 44.37077, ele: 900 },
      { lon: -121.14373, lat: 44.37082, ele: 897 },
      { lon: -121.14375, lat: 44.3709, ele: 893 },
      { lon: -121.14376, lat: 44.37097, ele: 891 },
      { lon: -121.14378, lat: 44.37103, ele: 888 },
      { lon: -121.14377, lat: 44.37118, ele: 885 },
      { lon: -121.14375, lat: 44.37132, ele: 882 },
      { lon: -121.14372, lat: 44.37141, ele: 880 },
      { lon: -121.14365, lat: 44.37147, ele: 878 },
      { lon: -121.14353, lat: 44.37164, ele: 874 },
      { lon: -121.14337, lat: 44.37188, ele: 889 },
      { lon: -121.1433, lat: 44.37197, ele: 897 },
      { lon: -121.14331, lat: 44.372, ele: 896 },
      { lon: -121.14335, lat: 44.37202, ele: 892 },
      { lon: -121.14348, lat: 44.37207, ele: 881 },
      { lon: -121.14365, lat: 44.37216, ele: 873 },
      { lon: -121.14374, lat: 44.37226, ele: 871 },
      { lon: -121.14383, lat: 44.37237, ele: 864 },
      { lon: -121.14388, lat: 44.37246, ele: 858 },
      { lon: -121.14386, lat: 44.37253, ele: 861 },
      { lon: -121.14378, lat: 44.3726, ele: 870 },
      { lon: -121.14378, lat: 44.37266, ele: 871 },
      { lon: -121.14399, lat: 44.37288, ele: 861 },
      { lon: -121.14406, lat: 44.37298, ele: 861 },
      { lon: -121.14408, lat: 44.37302, ele: 861 },
      { lon: -121.14421, lat: 44.37327, ele: 855 },
      { lon: -121.14437, lat: 44.37311, ele: 846 },
      { lon: -121.14447, lat: 44.37291, ele: 831 },
      { lon: -121.1445, lat: 44.37289, ele: 829 },
      { lon: -121.14452, lat: 44.3729, ele: 828 },
      { lon: -121.14461, lat: 44.37307, ele: 832 },
      { lon: -121.14464, lat: 44.37311, ele: 830 },
      { lon: -121.14466, lat: 44.37311, ele: 829 },
      { lon: -121.14476, lat: 44.37303, ele: 823 },
      { lon: -121.14479, lat: 44.37301, ele: 822 },
      { lon: -121.14492, lat: 44.37289, ele: 814 },
      { lon: -121.14519, lat: 44.37272, ele: 809 },
      { lon: -121.1452, lat: 44.37277, ele: 809 },
      { lon: -121.14519, lat: 44.37282, ele: 810 },
      { lon: -121.14511, lat: 44.37291, ele: 812 },
      { lon: -121.14507, lat: 44.37297, ele: 814 },
      { lon: -121.14506, lat: 44.37304, ele: 815 },
      { lon: -121.14504, lat: 44.37309, ele: 816 },
      { lon: -121.145, lat: 44.37314, ele: 816 },
      { lon: -121.14503, lat: 44.37328, ele: 815 },
      { lon: -121.14505, lat: 44.37338, ele: 815 },
      { lon: -121.14504, lat: 44.37344, ele: 816 },
      { lon: -121.14506, lat: 44.37348, ele: 816 },
      { lon: -121.14512, lat: 44.37352, ele: 815 },
      { lon: -121.14514, lat: 44.3736, ele: 814 },
      { lon: -121.14512, lat: 44.37365, ele: 817 },
      { lon: -121.14517, lat: 44.37374, ele: 818 },
      { lon: -121.14525, lat: 44.37378, ele: 817 },
      { lon: -121.14527, lat: 44.37383, ele: 818 },
      { lon: -121.14531, lat: 44.37388, ele: 818 },
      { lon: -121.1453, lat: 44.37395, ele: 823 },
      { lon: -121.14535, lat: 44.374, ele: 825 },
      { lon: -121.14537, lat: 44.37406, ele: 828 },
      { lon: -121.14547, lat: 44.37415, ele: 829 },
      { lon: -121.14557, lat: 44.37422, ele: 826 },
      { lon: -121.14563, lat: 44.37427, ele: 824 },
      { lon: -121.14569, lat: 44.37436, ele: 823 },
      { lon: -121.14578, lat: 44.37447, ele: 821 },
      { lon: -121.14593, lat: 44.37457, ele: 816 },
      { lon: -121.14604, lat: 44.37464, ele: 814 },
      { lon: -121.1461, lat: 44.37469, ele: 814 },
      { lon: -121.14613, lat: 44.37471, ele: 814 },
      { lon: -121.14617, lat: 44.37476, ele: 816 },
      { lon: -121.14623, lat: 44.37482, ele: 818 },
      { lon: -121.14627, lat: 44.37487, ele: 820 },
      { lon: -121.14632, lat: 44.37493, ele: 822 },
      { lon: -121.1464, lat: 44.37503, ele: 824 },
      { lon: -121.14649, lat: 44.37514, ele: 825 },
      { lon: -121.14655, lat: 44.37522, ele: 826 },
      { lon: -121.14666, lat: 44.3753, ele: 824 },
      { lon: -121.14678, lat: 44.37538, ele: 822 },
      { lon: -121.14681, lat: 44.37549, ele: 825 },
      { lon: -121.14686, lat: 44.37559, ele: 827 },
      { lon: -121.14694, lat: 44.37568, ele: 828 },
      { lon: -121.14704, lat: 44.3758, ele: 829 },
      { lon: -121.14706, lat: 44.37584, ele: 830 },
      { lon: -121.1471, lat: 44.37598, ele: 833 },
      { lon: -121.14717, lat: 44.37603, ele: 832 },
      { lon: -121.14713, lat: 44.37612, ele: 836 },
      { lon: -121.14719, lat: 44.37615, ele: 835 },
      { lon: -121.14715, lat: 44.37625, ele: 838 },
      { lon: -121.1471, lat: 44.37637, ele: 841 },
      { lon: -121.14712, lat: 44.37659, ele: 844 },
      { lon: -121.14718, lat: 44.37663, ele: 843 },
      { lon: -121.14721, lat: 44.37666, ele: 844 },
      { lon: -121.14719, lat: 44.3767, ele: 844 },
      { lon: -121.14706, lat: 44.37677, ele: 846 },
      { lon: -121.14682, lat: 44.37684, ele: 848 },
      { lon: -121.14663, lat: 44.37689, ele: 849 },
      { lon: -121.14635, lat: 44.377, ele: 850 },
      { lon: -121.14585, lat: 44.37706, ele: 853 },
      { lon: -121.14545, lat: 44.37716, ele: 856 },
      { lon: -121.14538, lat: 44.37717, ele: 857 },
      { lon: -121.14517, lat: 44.37718, ele: 858 },
      { lon: -121.14498, lat: 44.37716, ele: 859 },
      { lon: -121.14486, lat: 44.37717, ele: 859 },
      { lon: -121.14419, lat: 44.37739, ele: 863 },
      { lon: -121.14397, lat: 44.37744, ele: 864 },
      { lon: -121.14385, lat: 44.37745, ele: 865 },
      { lon: -121.1437, lat: 44.37743, ele: 866 },
      { lon: -121.14362, lat: 44.37743, ele: 866 },
      { lon: -121.14354, lat: 44.37745, ele: 866 },
      { lon: -121.14328, lat: 44.37745, ele: 869 },
      { lon: -121.14298, lat: 44.37738, ele: 873 },
      { lon: -121.14282, lat: 44.3773, ele: 875 },
      { lon: -121.14266, lat: 44.37719, ele: 878 },
      { lon: -121.14245, lat: 44.37699, ele: 878 },
      { lon: -121.14209, lat: 44.37679, ele: 881 },
      { lon: -121.14207, lat: 44.37674, ele: 882 },
      { lon: -121.14213, lat: 44.37668, ele: 883 },
      { lon: -121.1423, lat: 44.37662, ele: 885 },
      { lon: -121.14235, lat: 44.37658, ele: 886 },
      { lon: -121.14235, lat: 44.37655, ele: 887 },
      { lon: -121.14231, lat: 44.37649, ele: 888 },
      { lon: -121.14199, lat: 44.37629, ele: 892 },
      { lon: -121.14191, lat: 44.37625, ele: 893 },
      { lon: -121.14175, lat: 44.37625, ele: 893 },
      { lon: -121.14148, lat: 44.37631, ele: 894 },
      { lon: -121.14098, lat: 44.37638, ele: 899 },
      { lon: -121.14062, lat: 44.37645, ele: 899 },
      { lon: -121.14013, lat: 44.37651, ele: 901 },
      { lon: -121.13999, lat: 44.37654, ele: 901 },
      { lon: -121.13992, lat: 44.37659, ele: 901 },
      { lon: -121.13989, lat: 44.37667, ele: 901 },
      { lon: -121.14003, lat: 44.37696, ele: 902 },
      { lon: -121.14013, lat: 44.37709, ele: 904 },
      { lon: -121.14026, lat: 44.37717, ele: 905 },
      { lon: -121.14039, lat: 44.37722, ele: 906 },
      { lon: -121.14056, lat: 44.37729, ele: 905 },
      { lon: -121.14037, lat: 44.37729, ele: 907 },
      { lon: -121.1401, lat: 44.37728, ele: 908 },
      { lon: -121.13996, lat: 44.37725, ele: 908 },
      { lon: -121.13973, lat: 44.37715, ele: 908 },
      { lon: -121.13956, lat: 44.37698, ele: 909 },
      { lon: -121.13951, lat: 44.37696, ele: 910 },
      { lon: -121.13944, lat: 44.37692, ele: 911 },
      { lon: -121.13943, lat: 44.37703, ele: 912 },
      { lon: -121.13944, lat: 44.37715, ele: 913 },
      { lon: -121.13952, lat: 44.37731, ele: 913 },
      { lon: -121.13953, lat: 44.37738, ele: 914 },
      { lon: -121.13948, lat: 44.37747, ele: 916 },
      { lon: -121.13939, lat: 44.3775, ele: 917 },
      { lon: -121.13872, lat: 44.37748, ele: 918 },
      { lon: -121.13813, lat: 44.37739, ele: 912 },
      { lon: -121.13755, lat: 44.37726, ele: 908 },
      { lon: -121.13736, lat: 44.37723, ele: 906 },
      { lon: -121.1371, lat: 44.37722, ele: 905 },
      { lon: -121.13675, lat: 44.37721, ele: 904 },
      { lon: -121.13658, lat: 44.37721, ele: 906 },
      { lon: -121.13638, lat: 44.37724, ele: 911 },
      { lon: -121.13615, lat: 44.37728, ele: 913 },
      { lon: -121.13545, lat: 44.37741, ele: 921 },
      { lon: -121.13518, lat: 44.37747, ele: 927 },
      { lon: -121.13464, lat: 44.37755, ele: 937 },
      { lon: -121.13439, lat: 44.37761, ele: 938 },
      { lon: -121.13434, lat: 44.3776, ele: 939 },
      { lon: -121.13432, lat: 44.37757, ele: 940 },
      { lon: -121.13436, lat: 44.37751, ele: 941 },
      { lon: -121.1345, lat: 44.37741, ele: 939 },
      { lon: -121.13466, lat: 44.37729, ele: 935 },
      { lon: -121.13447, lat: 44.37732, ele: 938 },
      { lon: -121.13405, lat: 44.37746, ele: 942 },
      { lon: -121.13392, lat: 44.3775, ele: 943 },
      { lon: -121.13407, lat: 44.37732, ele: 942 },
      { lon: -121.13383, lat: 44.37736, ele: 946 },
      { lon: -121.13354, lat: 44.37741, ele: 950 },
      { lon: -121.13342, lat: 44.37746, ele: 952 },
      { lon: -121.13332, lat: 44.37747, ele: 954 },
      { lon: -121.13321, lat: 44.37749, ele: 955 },
      { lon: -121.13319, lat: 44.37748, ele: 956 },
      { lon: -121.1332, lat: 44.37746, ele: 956 },
      { lon: -121.13325, lat: 44.37745, ele: 955 },
      { lon: -121.13338, lat: 44.37735, ele: 954 },
      { lon: -121.13345, lat: 44.37728, ele: 953 },
      { lon: -121.13344, lat: 44.37727, ele: 953 },
      { lon: -121.1334, lat: 44.37727, ele: 954 },
      { lon: -121.13336, lat: 44.3773, ele: 954 },
      { lon: -121.13322, lat: 44.37733, ele: 956 },
      { lon: -121.13302, lat: 44.37735, ele: 959 },
      { lon: -121.13296, lat: 44.37737, ele: 960 },
      { lon: -121.13284, lat: 44.37738, ele: 962 },
      { lon: -121.13283, lat: 44.37737, ele: 963 },
      { lon: -121.13285, lat: 44.37734, ele: 963 },
      { lon: -121.13298, lat: 44.37728, ele: 961 },
      { lon: -121.13306, lat: 44.37719, ele: 959 },
      { lon: -121.13306, lat: 44.37718, ele: 959 },
      { lon: -121.13296, lat: 44.37719, ele: 961 },
      { lon: -121.13287, lat: 44.37722, ele: 964 },
      { lon: -121.1327, lat: 44.37727, ele: 967 },
      { lon: -121.13249, lat: 44.37733, ele: 969 },
      { lon: -121.13234, lat: 44.37735, ele: 970 },
      { lon: -121.13189, lat: 44.37741, ele: 971 },
      { lon: -121.13164, lat: 44.37747, ele: 970 },
      { lon: -121.13127, lat: 44.37759, ele: 969 },
      { lon: -121.13086, lat: 44.37762, ele: 976 },
      { lon: -121.13031, lat: 44.37761, ele: 984 },
      { lon: -121.12986, lat: 44.37764, ele: 983 },
      { lon: -121.12927, lat: 44.37761, ele: 989 },
      { lon: -121.12913, lat: 44.37762, ele: 991 },
      { lon: -121.12928, lat: 44.37752, ele: 993 },
      { lon: -121.12942, lat: 44.37747, ele: 994 },
      { lon: -121.12966, lat: 44.37745, ele: 993 },
      { lon: -121.13005, lat: 44.37738, ele: 996 },
      { lon: -121.13036, lat: 44.37734, ele: 998 },
      { lon: -121.13088, lat: 44.37723, ele: 1000 },
      { lon: -121.1312, lat: 44.37718, ele: 994 },
      { lon: -121.13122, lat: 44.37716, ele: 994 },
      { lon: -121.13117, lat: 44.37714, ele: 996 },
      { lon: -121.13089, lat: 44.37712, ele: 1005 },
      { lon: -121.13078, lat: 44.37712, ele: 1008 },
      { lon: -121.13029, lat: 44.37712, ele: 1013 },
      { lon: -121.12964, lat: 44.37708, ele: 1013 },
      { lon: -121.12926, lat: 44.37708, ele: 1016 },
      { lon: -121.12908, lat: 44.3771, ele: 1017 },
      { lon: -121.12887, lat: 44.37718, ele: 1016 },
      { lon: -121.1286, lat: 44.37733, ele: 1015 },
      { lon: -121.12852, lat: 44.37736, ele: 1016 },
      { lon: -121.12832, lat: 44.37744, ele: 1018 },
      { lon: -121.12847, lat: 44.37729, ele: 1020 },
      { lon: -121.12856, lat: 44.37721, ele: 1021 },
      { lon: -121.12871, lat: 44.37709, ele: 1024 },
      { lon: -121.12883, lat: 44.37702, ele: 1024 },
      { lon: -121.12904, lat: 44.37695, ele: 1025 },
      { lon: -121.1292, lat: 44.37691, ele: 1025 },
      { lon: -121.1296, lat: 44.37687, ele: 1027 },
      { lon: -121.12975, lat: 44.37683, ele: 1030 },
      { lon: -121.1302, lat: 44.37677, ele: 1031 },
      { lon: -121.12968, lat: 44.37675, ele: 1034 },
      { lon: -121.12905, lat: 44.37672, ele: 1034 },
      { lon: -121.12866, lat: 44.3768, ele: 1037 },
      { lon: -121.12898, lat: 44.37667, ele: 1036 },
      { lon: -121.12905, lat: 44.37663, ele: 1038 },
      { lon: -121.12915, lat: 44.37661, ele: 1038 },
      { lon: -121.12972, lat: 44.37655, ele: 1041 },
      { lon: -121.13001, lat: 44.37648, ele: 1035 },
      { lon: -121.12972, lat: 44.37647, ele: 1042 },
      { lon: -121.12915, lat: 44.37639, ele: 1044 },
      { lon: -121.12897, lat: 44.37634, ele: 1047 },
      { lon: -121.12854, lat: 44.3763, ele: 1053 },
      { lon: -121.12841, lat: 44.37624, ele: 1054 },
      { lon: -121.12837, lat: 44.37619, ele: 1054 },
      { lon: -121.12826, lat: 44.37615, ele: 1054 },
      { lon: -121.12823, lat: 44.37617, ele: 1055 },
      { lon: -121.12822, lat: 44.37619, ele: 1055 },
      { lon: -121.12824, lat: 44.37622, ele: 1055 },
      { lon: -121.12822, lat: 44.37625, ele: 1056 },
      { lon: -121.12817, lat: 44.37628, ele: 1057 },
      { lon: -121.12812, lat: 44.37634, ele: 1058 },
      { lon: -121.12809, lat: 44.37638, ele: 1060 },
      { lon: -121.12807, lat: 44.37638, ele: 1060 },
      { lon: -121.12803, lat: 44.37637, ele: 1061 },
      { lon: -121.12801, lat: 44.37631, ele: 1060 },
      { lon: -121.12796, lat: 44.37629, ele: 1061 },
      { lon: -121.12792, lat: 44.3763, ele: 1062 },
      { lon: -121.12787, lat: 44.37635, ele: 1064 },
      { lon: -121.12787, lat: 44.37643, ele: 1065 },
      { lon: -121.12784, lat: 44.3765, ele: 1065 },
      { lon: -121.12777, lat: 44.37656, ele: 1067 },
      { lon: -121.1277, lat: 44.37662, ele: 1069 },
      { lon: -121.12765, lat: 44.37665, ele: 1070 },
      { lon: -121.1276, lat: 44.37667, ele: 1071 },
      { lon: -121.12754, lat: 44.3767, ele: 1072 },
      { lon: -121.12748, lat: 44.37674, ele: 1072 },
      { lon: -121.12737, lat: 44.37677, ele: 1074 },
      { lon: -121.12729, lat: 44.37677, ele: 1076 },
      { lon: -121.12723, lat: 44.37678, ele: 1077 },
      { lon: -121.12721, lat: 44.37677, ele: 1078 },
      { lon: -121.12718, lat: 44.37676, ele: 1079 },
      { lon: -121.12718, lat: 44.37673, ele: 1079 },
      { lon: -121.12728, lat: 44.3767, ele: 1078 },
      { lon: -121.12731, lat: 44.37665, ele: 1078 },
      { lon: -121.1273, lat: 44.37662, ele: 1078 },
      { lon: -121.12733, lat: 44.37658, ele: 1078 },
      { lon: -121.12732, lat: 44.37656, ele: 1078 },
      { lon: -121.12727, lat: 44.37655, ele: 1078 },
      { lon: -121.12721, lat: 44.37653, ele: 1079 },
      { lon: -121.12719, lat: 44.37649, ele: 1079 },
      { lon: -121.12716, lat: 44.37644, ele: 1078 },
      { lon: -121.12704, lat: 44.37636, ele: 1077 },
      { lon: -121.1269, lat: 44.37634, ele: 1077 },
      { lon: -121.12678, lat: 44.37636, ele: 1080 },
      { lon: -121.12668, lat: 44.37637, ele: 1082 },
      { lon: -121.12655, lat: 44.37636, ele: 1084 },
      { lon: -121.12645, lat: 44.37632, ele: 1085 },
      { lon: -121.12636, lat: 44.37627, ele: 1084 },
      { lon: -121.12629, lat: 44.37619, ele: 1082 },
      { lon: -121.12621, lat: 44.37611, ele: 1079 },
      { lon: -121.12613, lat: 44.37604, ele: 1076 },
      { lon: -121.12608, lat: 44.37601, ele: 1075 },
      { lon: -121.12573, lat: 44.37584, ele: 1071 },
      { lon: -121.12557, lat: 44.37575, ele: 1070 },
      { lon: -121.12548, lat: 44.37568, ele: 1069 },
      { lon: -121.1252, lat: 44.37541, ele: 1064 },
      { lon: -121.12503, lat: 44.37524, ele: 1062 },
      { lon: -121.12493, lat: 44.37515, ele: 1064 },
      { lon: -121.12491, lat: 44.37507, ele: 1063 },
      { lon: -121.12491, lat: 44.37499, ele: 1061 },
      { lon: -121.125, lat: 44.37427, ele: 1042 },
      { lon: -121.12507, lat: 44.37396, ele: 1036 },
      { lon: -121.12518, lat: 44.37354, ele: 1032 },
      { lon: -121.12525, lat: 44.37338, ele: 1027 },
      { lon: -121.12532, lat: 44.37314, ele: 1023 },
      { lon: -121.12542, lat: 44.37287, ele: 1020 },
      { lon: -121.12548, lat: 44.37267, ele: 1018 },
      { lon: -121.12564, lat: 44.37238, ele: 1008 },
      { lon: -121.12583, lat: 44.372, ele: 994 },
      { lon: -121.12591, lat: 44.37175, ele: 995 },
      { lon: -121.12601, lat: 44.37134, ele: 992 },
      { lon: -121.12604, lat: 44.37108, ele: 988 },
      { lon: -121.12605, lat: 44.37099, ele: 986 },
      { lon: -121.12603, lat: 44.37062, ele: 981 },
      { lon: -121.12599, lat: 44.37014, ele: 968 },
      { lon: -121.12593, lat: 44.36989, ele: 965 },
      { lon: -121.12584, lat: 44.3697, ele: 966 },
      { lon: -121.12569, lat: 44.36952, ele: 966 },
      { lon: -121.1256, lat: 44.3694, ele: 965 },
      { lon: -121.12561, lat: 44.36935, ele: 963 },
      { lon: -121.12565, lat: 44.36935, ele: 961 },
      { lon: -121.12576, lat: 44.36941, ele: 959 },
      { lon: -121.12595, lat: 44.36955, ele: 956 },
      { lon: -121.12625, lat: 44.36972, ele: 949 },
      { lon: -121.12666, lat: 44.37002, ele: 941 },
      { lon: -121.12696, lat: 44.37028, ele: 934 },
      { lon: -121.12725, lat: 44.37049, ele: 929 },
      { lon: -121.12752, lat: 44.37072, ele: 925 },
      { lon: -121.12771, lat: 44.37085, ele: 923 },
      { lon: -121.12779, lat: 44.37092, ele: 923 },
      { lon: -121.12783, lat: 44.37103, ele: 924 },
      { lon: -121.12796, lat: 44.37124, ele: 923 },
      { lon: -121.1281, lat: 44.37136, ele: 920 },
      { lon: -121.1283, lat: 44.37151, ele: 913 },
      { lon: -121.12846, lat: 44.37167, ele: 907 },
      { lon: -121.12854, lat: 44.37181, ele: 902 },
      { lon: -121.12853, lat: 44.37195, ele: 899 },
      { lon: -121.12849, lat: 44.37208, ele: 899 },
      { lon: -121.12849, lat: 44.37225, ele: 898 },
      { lon: -121.12849, lat: 44.37247, ele: 897 },
      { lon: -121.12851, lat: 44.37266, ele: 898 },
      { lon: -121.12855, lat: 44.37271, ele: 898 },
      { lon: -121.12863, lat: 44.37274, ele: 898 },
      { lon: -121.1288, lat: 44.37274, ele: 896 },
      { lon: -121.12895, lat: 44.37272, ele: 894 },
      { lon: -121.12907, lat: 44.37266, ele: 892 },
      { lon: -121.12915, lat: 44.37261, ele: 890 },
      { lon: -121.1292, lat: 44.37261, ele: 890 },
      { lon: -121.12927, lat: 44.3726, ele: 890 },
      { lon: -121.12933, lat: 44.37258, ele: 889 },
      { lon: -121.12944, lat: 44.37253, ele: 887 },
      { lon: -121.12967, lat: 44.37243, ele: 883 },
      { lon: -121.12975, lat: 44.37241, ele: 882 },
      { lon: -121.12984, lat: 44.37238, ele: 880 },
      { lon: -121.13004, lat: 44.37229, ele: 875 },
      { lon: -121.13011, lat: 44.37224, ele: 872 },
      { lon: -121.13013, lat: 44.37221, ele: 871 },
      { lon: -121.13015, lat: 44.37217, ele: 870 },
      { lon: -121.1302, lat: 44.37216, ele: 869 },
      { lon: -121.13028, lat: 44.37217, ele: 867 },
      { lon: -121.13036, lat: 44.37222, ele: 865 },
      { lon: -121.13047, lat: 44.37228, ele: 863 },
      { lon: -121.13085, lat: 44.37255, ele: 851 },
      { lon: -121.13094, lat: 44.37266, ele: 849 },
      { lon: -121.13104, lat: 44.37275, ele: 846 },
      { lon: -121.13109, lat: 44.37284, ele: 846 },
      { lon: -121.13112, lat: 44.37286, ele: 845 },
      { lon: -121.13105, lat: 44.37267, ele: 843 },
      { lon: -121.13102, lat: 44.37258, ele: 842 },
      { lon: -121.13097, lat: 44.37236, ele: 844 },
      { lon: -121.13088, lat: 44.37223, ele: 848 },
      { lon: -121.1312, lat: 44.37246, ele: 832 },
      { lon: -121.13134, lat: 44.37261, ele: 830 },
      { lon: -121.13141, lat: 44.37266, ele: 829 },
      { lon: -121.13147, lat: 44.37273, ele: 829 },
      { lon: -121.13154, lat: 44.37281, ele: 829 },
      { lon: -121.13162, lat: 44.3729, ele: 830 },
      { lon: -121.13181, lat: 44.37296, ele: 827 },
      { lon: -121.13188, lat: 44.37295, ele: 825 },
      { lon: -121.13202, lat: 44.37307, ele: 824 },
      { lon: -121.13219, lat: 44.37315, ele: 822 },
      { lon: -121.13235, lat: 44.37323, ele: 821 },
      { lon: -121.13241, lat: 44.37326, ele: 820 },
      { lon: -121.13244, lat: 44.37328, ele: 820 },
      { lon: -121.13244, lat: 44.37337, ele: 821 },
      { lon: -121.13246, lat: 44.37348, ele: 822 },
      { lon: -121.13266, lat: 44.37372, ele: 818 },
      { lon: -121.13273, lat: 44.37386, ele: 816 },
      { lon: -121.1329, lat: 44.37401, ele: 814 },
      { lon: -121.13303, lat: 44.37415, ele: 814 },
      { lon: -121.13314, lat: 44.37423, ele: 815 },
      { lon: -121.13326, lat: 44.37428, ele: 815 },
      { lon: -121.13339, lat: 44.37431, ele: 815 },
      { lon: -121.13356, lat: 44.37431, ele: 815 },
      { lon: -121.1338, lat: 44.37431, ele: 814 },
      { lon: -121.13396, lat: 44.37433, ele: 813 },
      { lon: -121.13426, lat: 44.37443, ele: 812 },
      { lon: -121.13461, lat: 44.37451, ele: 810 },
      { lon: -121.13467, lat: 44.37453, ele: 810 },
      { lon: -121.13474, lat: 44.37454, ele: 809 },
      { lon: -121.13483, lat: 44.37453, ele: 809 },
      { lon: -121.13495, lat: 44.37454, ele: 808 },
      { lon: -121.13511, lat: 44.37454, ele: 807 },
      { lon: -121.13556, lat: 44.3745, ele: 807 },
      { lon: -121.13571, lat: 44.37449, ele: 808 },
      { lon: -121.13582, lat: 44.37448, ele: 808 },
      { lon: -121.13591, lat: 44.37445, ele: 808 },
      { lon: -121.13594, lat: 44.37444, ele: 808 },
      { lon: -121.13605, lat: 44.37442, ele: 808 },
      { lon: -121.13621, lat: 44.37441, ele: 807 },
      { lon: -121.13632, lat: 44.37441, ele: 806 },
      { lon: -121.1364, lat: 44.37444, ele: 806 },
      { lon: -121.13647, lat: 44.37446, ele: 805 },
      { lon: -121.13654, lat: 44.37445, ele: 805 },
      { lon: -121.1367, lat: 44.37447, ele: 804 },
      { lon: -121.13684, lat: 44.37446, ele: 804 },
      { lon: -121.13693, lat: 44.37444, ele: 805 },
      { lon: -121.13704, lat: 44.37444, ele: 805 },
      { lon: -121.13715, lat: 44.37442, ele: 805 },
      { lon: -121.13725, lat: 44.3744, ele: 806 },
      { lon: -121.13732, lat: 44.37436, ele: 806 },
      { lon: -121.1374, lat: 44.37436, ele: 807 },
      { lon: -121.1375, lat: 44.37438, ele: 807 },
      { lon: -121.13761, lat: 44.37438, ele: 808 },
      { lon: -121.13768, lat: 44.37438, ele: 809 },
      { lon: -121.13775, lat: 44.37436, ele: 809 },
      { lon: -121.13785, lat: 44.37429, ele: 810 },
      { lon: -121.13791, lat: 44.37421, ele: 810 },
      { lon: -121.13795, lat: 44.37412, ele: 810 },
      { lon: -121.138, lat: 44.37392, ele: 807 },
      { lon: -121.13809, lat: 44.3737, ele: 804 },
      { lon: -121.13821, lat: 44.37348, ele: 803 },
      { lon: -121.13826, lat: 44.37345, ele: 803 },
      { lon: -121.13826, lat: 44.37337, ele: 803 },
      { lon: -121.13824, lat: 44.37324, ele: 803 },
      { lon: -121.13823, lat: 44.37313, ele: 804 },
      { lon: -121.13825, lat: 44.37288, ele: 805 },
      { lon: -121.13827, lat: 44.37274, ele: 806 },
      { lon: -121.1382, lat: 44.3724, ele: 807 },
      { lon: -121.13819, lat: 44.37183, ele: 810 },
      { lon: -121.13814, lat: 44.37167, ele: 808 },
      { lon: -121.13812, lat: 44.37163, ele: 808 },
      { lon: -121.13795, lat: 44.37138, ele: 808 },
      { lon: -121.13779, lat: 44.37116, ele: 807 },
      { lon: -121.13767, lat: 44.37091, ele: 809 },
      { lon: -121.13758, lat: 44.37058, ele: 812 },
      { lon: -121.13748, lat: 44.37036, ele: 811 },
      { lon: -121.13743, lat: 44.37009, ele: 810 },
      { lon: -121.1374, lat: 44.36994, ele: 810 },
      { lon: -121.13741, lat: 44.36989, ele: 810 },
      { lon: -121.13749, lat: 44.36972, ele: 812 },
      { lon: -121.13752, lat: 44.36956, ele: 812 },
      { lon: -121.13752, lat: 44.36939, ele: 812 },
      { lon: -121.13751, lat: 44.36918, ele: 810 },
      { lon: -121.13759, lat: 44.36896, ele: 810 },
      { lon: -121.13776, lat: 44.36877, ele: 811 },
      { lon: -121.13799, lat: 44.36866, ele: 816 },
      { lon: -121.13833, lat: 44.36858, ele: 824 },
      { lon: -121.1384, lat: 44.36855, ele: 824 },
      { lon: -121.13846, lat: 44.36854, ele: 825 },
      { lon: -121.13849, lat: 44.36849, ele: 823 },
      { lon: -121.1388, lat: 44.36836, ele: 822 },
      { lon: -121.13899, lat: 44.36824, ele: 821 },
      { lon: -121.1391, lat: 44.36821, ele: 822 },
      { lon: -121.13927, lat: 44.36812, ele: 830 },
      { lon: -121.13928, lat: 44.36808, ele: 827 },
      { lon: -121.13925, lat: 44.36804, ele: 823 },
      { lon: -121.13901, lat: 44.36781, ele: 815 },
      { lon: -121.13896, lat: 44.36771, ele: 814 },
      { lon: -121.13892, lat: 44.36742, ele: 815 },
      { lon: -121.13883, lat: 44.36728, ele: 815 },
      { lon: -121.13874, lat: 44.36706, ele: 816 },
      { lon: -121.13861, lat: 44.36689, ele: 818 },
      { lon: -121.13857, lat: 44.36677, ele: 820 },
      { lon: -121.13854, lat: 44.36669, ele: 821 },
      { lon: -121.1385, lat: 44.3666, ele: 823 },
      { lon: -121.13855, lat: 44.36642, ele: 823 },
      { lon: -121.13828, lat: 44.36651, ele: 832 },
      { lon: -121.13827, lat: 44.36652, ele: 833 },
      { lon: -121.13824, lat: 44.36652, ele: 834 },
      { lon: -121.13823, lat: 44.3665, ele: 835 },
      { lon: -121.13823, lat: 44.36649, ele: 835 },
      { lon: -121.13826, lat: 44.36641, ele: 834 },
      { lon: -121.13825, lat: 44.3664, ele: 835 },
      { lon: -121.13823, lat: 44.3664, ele: 836 },
      { lon: -121.13816, lat: 44.36643, ele: 838 },
      { lon: -121.13811, lat: 44.36644, ele: 841 },
      { lon: -121.13804, lat: 44.36644, ele: 843 },
      { lon: -121.13796, lat: 44.36652, ele: 845 },
      { lon: -121.13791, lat: 44.3666, ele: 846 },
      { lon: -121.13789, lat: 44.36667, ele: 846 },
      { lon: -121.13785, lat: 44.3669, ele: 844 },
      { lon: -121.13783, lat: 44.36694, ele: 844 },
      { lon: -121.13781, lat: 44.36698, ele: 844 },
      { lon: -121.13776, lat: 44.36701, ele: 845 },
      { lon: -121.1377, lat: 44.36705, ele: 845 },
      { lon: -121.13734, lat: 44.36716, ele: 852 },
      { lon: -121.1372, lat: 44.36718, ele: 855 },
      { lon: -121.13717, lat: 44.36702, ele: 858 },
      { lon: -121.13717, lat: 44.36699, ele: 858 },
      { lon: -121.13721, lat: 44.36692, ele: 859 },
      { lon: -121.13723, lat: 44.36687, ele: 859 },
      { lon: -121.13725, lat: 44.3668, ele: 859 },
      { lon: -121.13735, lat: 44.36664, ele: 859 },
      { lon: -121.13741, lat: 44.36649, ele: 858 },
      { lon: -121.13729, lat: 44.36646, ele: 860 },
      { lon: -121.13723, lat: 44.36644, ele: 861 },
      { lon: -121.13719, lat: 44.36641, ele: 862 },
      { lon: -121.13713, lat: 44.36634, ele: 862 },
      { lon: -121.13708, lat: 44.36621, ele: 863 },
      { lon: -121.13702, lat: 44.36613, ele: 864 }
    ]
  };