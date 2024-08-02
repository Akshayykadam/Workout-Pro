export const RapidAPIKey = '73679283c9mshe146472769bbc96p11a095jsn9346672ca3e2';

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const capitalizeFirstLetterOfWords = (text) => {
    return text.split(' ').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
};

const levels = ['beginner', 'advanced'];

export const bodyparts = [
    { name: 'back', image: require('../assets/images/back.png') },
    { name: 'cardio', image: require('../assets/images/cardio.png') },
    { name: 'chest', image: require('../assets/images/chest.png') },
    { name: 'lower arms', image: require('../assets/images/lowerArms.png') },
    { name: 'lower legs', image: require('../assets/images/lowerLegs.png') },
    { name: 'neck', image: require('../assets/images/neck.png') },
    { name: 'shoulders', image: require('../assets/images/shoulders.png') },
    { name: 'upper arms', image: require('../assets/images/upperArms.png') },
    { name: 'upper legs', image: require('../assets/images/upperLegs.png') },
    { name: 'waist', image: require('../assets/images/waist.png') },

].map(part => ({
    ...part,
    level: levels[Math.floor(Math.random() * levels.length)],
    reps: 10
}));


export const exerciseData = {
     back : [
        {
            "bodyPart": "back",
            "equipment": "cable",
            "gifUrl": "https://v2.exercisedb.io/image/2Dl5yJQ5604fMO",
            "id": "0007",
            "instructions": [
                "Sit on the cable machine with your back straight and feet flat on the ground.",
                "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
                "Lean back slightly and pull the handles towards your chest, squeezing your shoulder blades together.",
                "Pause for a moment at the peak of the movement, then slowly release the handles back to the starting position.",
                "Repeat for the desired number of repetitions."
            ],
            "name": "alternate lateral pulldown",
            "secondaryMuscles": [
                "biceps",
                "rhomboids"
            ],
            "target": "lats"
        },
        {
            "bodyPart": "back",
            "equipment": "body weight",
            "gifUrl": "https://v2.exercisedb.io/image/mtQZw5QQLyvfkH",
            "id": "3293",
            "instructions": [
                "Start by hanging from a pull-up bar with an overhand grip, slightly wider than shoulder-width apart.",
                "Engage your core and pull your shoulder blades down and back.",
                "As you pull yourself up, bend one arm and bring your elbow towards your side, while keeping the other arm straight.",
                "Continue pulling until your chin is above the bar and your bent arm is fully flexed.",
                "Lower yourself back down with control, straightening the bent arm and repeating the movement on the other side.",
                "Alternate sides with each repetition."
            ],
            "name": "archer pull up",
            "secondaryMuscles": [
                "biceps",
                "forearms"
            ],
            "target": "lats"
        },
        {
            "bodyPart": "back",
            "equipment": "leverage machine",
            "gifUrl": "https://v2.exercisedb.io/image/ehcFoVjEihdM1z",
            "id": "0015",
            "instructions": [
                "Adjust the machine to your desired weight and height.",
                "Place your hands on the parallel bars with a close grip, palms facing each other.",
                "Hang from the bars with your arms fully extended and your feet off the ground.",
                "Engage your back muscles and pull your body up towards the bars, keeping your elbows close to your body.",
                "Continue pulling until your chin is above the bars.",
                "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
                "Repeat for the desired number of repetitions."
            ],
            "name": "assisted parallel close grip pull-up",
            "secondaryMuscles": [
                "biceps",
                "forearms"
            ],
            "target": "lats"
        },
        {
            "bodyPart": "back",
            "equipment": "leverage machine",
            "gifUrl": "https://v2.exercisedb.io/image/M9wA2akBvy7ikD",
            "id": "0017",
            "instructions": [
                "Adjust the machine to your desired weight and height settings.",
                "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
                "Hang with your arms fully extended and your feet off the ground.",
                "Engage your back muscles and pull your body up towards the handles, keeping your elbows close to your body.",
                "Continue pulling until your chin is above the handles.",
                "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
                "Repeat for the desired number of repetitions."
            ],
            "name": "assisted pull-up",
            "secondaryMuscles": [
                "biceps",
                "forearms"
            ],
            "target": "lats"
        },
        {
            "bodyPart": "back",
            "equipment": "leverage machine",
            "gifUrl": "https://v2.exercisedb.io/image/ZzydBJnKgciSoP",
            "id": "1431",
            "instructions": [
                "Adjust the machine to your desired assistance level.",
                "Stand on the foot platform and grip the handles with an overhand grip, slightly wider than shoulder-width apart.",
                "Keep your chest up and shoulders back, engage your core, and slightly bend your knees.",
                "Pull your body up by flexing your elbows and driving your elbows down towards your sides.",
                "Continue pulling until your chin is above the bar.",
                "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
                "Repeat for the desired number of repetitions."
            ],
            "name": "assisted standing chin-up",
            "secondaryMuscles": [
                "biceps",
                "forearms"
            ],
            "target": "lats"
        },
        {
            "bodyPart": "back",
            "equipment": "leverage machine",
            "gifUrl": "https://v2.exercisedb.io/image/dImJLMaPGahHyX",
            "id": "1432",
            "instructions": [
                "Adjust the machine to your desired weight and height settings.",
                "Stand facing the machine with your feet shoulder-width apart.",
                "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
                "Engage your lats and biceps, and pull yourself up towards the handles.",
                "Pause for a moment at the top, squeezing your back muscles.",
                "Slowly lower yourself back down to the starting position.",
                "Repeat for the desired number of repetitions."
            ],
            "name": "assisted standing pull-up",
            "secondaryMuscles": [
                "biceps",
                "forearms"
            ],
            "target": "lats"
        },
        {
            "bodyPart": "back",
            "equipment": "stability ball",
            "gifUrl": "https://v2.exercisedb.io/image/rTFMZKl4I2VeX9",
            "id": "1314",
            "instructions": [
                "Place the stability ball on the ground and lie face down on top of it, with your hips resting on the ball and your feet against a wall or other stable surface.",
                "Position your hands behind your head or crossed over your chest.",
                "Engage your core and slowly lift your upper body off the ball, extending your back until your body forms a straight line from your head to your heels.",
                "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
                "Repeat for the desired number of repetitions."
            ],
            "name": "back extension on exercise ball",
            "secondaryMuscles": [
                "glutes",
                "hamstrings"
            ],
            "target": "spine"
        },
        {
            "bodyPart": "back",
            "equipment": "body weight",
            "gifUrl": "https://v2.exercisedb.io/image/jwCTE46CZ82n4R",
            "id": "3297",
            "instructions": [
                "Start by hanging from a pull-up bar with an overhand grip, hands slightly wider than shoulder-width apart.",
                "Engage your core and pull your shoulder blades down and back.",
                "Bend your knees and tuck them towards your chest.",
                "Slowly lift your legs up, keeping them straight, until your body is parallel to the ground.",
                "Hold this position for a few seconds, then slowly lower your legs back down to the starting position.",
                "Repeat for the desired number of repetitions."
            ],
            "name": "back lever",
            "secondaryMuscles": [
                "biceps",
                "forearms",
                "core"
            ],
            "target": "upper back"
        },
        {
            "bodyPart": "back",
            "equipment": "body weight",
            "gifUrl": "https://v2.exercisedb.io/image/7tVp8cxPqRuhmE",
            "id": "1405",
            "instructions": [
                "Stand tall with your feet shoulder-width apart.",
                "Extend your arms straight out in front of you, parallel to the ground.",
                "Cross your arms in front of your body, with your right arm over your left arm.",
                "Interlock your fingers and rotate your palms away from your body.",
                "Slowly raise your arms up and away from your body, feeling a stretch in your back and chest.",
                "Hold the stretch for 15-30 seconds, then release.",
                "Repeat on the opposite side."
            ],
            "name": "back pec stretch",
            "secondaryMuscles": [
                "shoulders",
                "chest"
            ],
            "target": "lats"
        },
        {
            "bodyPart": "back",
            "equipment": "band",
            "gifUrl": "https://v2.exercisedb.io/image/aRwILVGDcvYlLy",
            "id": "0970",
            "instructions": [
                "Attach the band to a pull-up bar or sturdy anchor point.",
                "Step onto the band and grip the bar with your palms facing away from you, hands slightly wider than shoulder-width apart.",
                "Hang with your arms fully extended, keeping your core engaged and your shoulders down and back.",
                "Pull your body up towards the bar by squeezing your shoulder blades together and driving your elbows down towards your hips.",
                "Continue pulling until your chin is above the bar, then slowly lower yourself back down to the starting position.",
                "Repeat for the desired number of repetitions."
            ],
            "name": "band assisted pull-up",
            "secondaryMuscles": [
                "biceps",
                "forearms"
            ],
            "target": "lats"
        }
    
    ], 
    cardio: [
        {
            "bodyPart":"cardio",
            "equipment":"body weight",
            "gifUrl":"https://v2.exercisedb.io/image/8Szwl0fv6MUTvs",
            "id":"3220",
            "instructions":[
            "Stand with your feet shoulder-width apart.",
            "Bend your knees and lower your body into a squat position.",
            "Jump explosively upwards, extending your legs and arms.",
            "While in the air, spread your legs apart and bring your arms out to the sides.",
            "Land softly with your feet shoulder-width apart, bending your knees to absorb the impact.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"astride jumps (male)",
            "secondaryMuscles":[
            "quadriceps",
            "hamstrings",
            "calves"
            ],
            "target":"cardiovascular system"
            },
            {
            "bodyPart":"cardio",
            "equipment":"body weight",
            "gifUrl":"https://v2.exercisedb.io/image/n8OLlbnqQTUgXg",
            "id":"3672",
            "instructions":[
            "Stand with your feet shoulder-width apart.",
            "Step forward with your right foot, bending your knee and lowering your body into a lunge position.",
            "Push off with your right foot and step back to the starting position.",
            "Repeat the movement with your left foot, alternating legs with each step.",
            "Continue stepping back and forth, maintaining a steady pace.",
            "Repeat for the desired duration or number of repetitions."
            ],
            "name":"back and forth step",
            "secondaryMuscles":[
            "quadriceps",
            "hamstrings",
            "glutes",
            "calves"
            ],
            "target":"cardiovascular system"
            },
            {
            "bodyPart":"cardio",
            "equipment":"body weight",
            "gifUrl":"https://v2.exercisedb.io/image/IrOpI6vN2-kIFN",
            "id":"3360",
            "instructions":[
            "Start on all fours with your hands directly under your shoulders and your knees directly under your hips.",
            "Lift your knees slightly off the ground, keeping your back flat and your core engaged.",
            "Move your right hand and left foot forward simultaneously, followed by your left hand and right foot.",
            "Continue crawling forward, alternating your hand and foot movements.",
            "Maintain a steady pace and keep your core tight throughout the exercise.",
            "Continue for the desired distance or time."
            ],
            "name":"bear crawl",
            "secondaryMuscles":[
            "core",
            "shoulders",
            "triceps"
            ],
            "target":"cardiovascular system"
            },
            {
            "bodyPart":"cardio",
            "equipment":"body weight",
            "gifUrl":"https://v2.exercisedb.io/image/Y6GNNzhHoXoD1Y",
            "id":"1160",
            "instructions":[
            "Start in a standing position with your feet shoulder-width apart.",
            "Lower your body into a squat position by bending your knees and placing your hands on the floor in front of you.",
            "Kick your feet back into a push-up position.",
            "Perform a push-up, keeping your body in a straight line.",
            "Jump your feet back into the squat position.",
            "Jump up explosively, reaching your arms overhead.",
            "Land softly and immediately lower back into a squat position to begin the next repetition."
            ],
            "name":"burpee",
            "secondaryMuscles":[
            "quadriceps",
            "hamstrings",
            "calves",
            "shoulders",
            "chest"
            ],
            "target":"cardiovascular system"
            },
            {
            "bodyPart":"cardio",
            "equipment":"leverage machine",
            "gifUrl":"https://v2.exercisedb.io/image/kTzsBUtr9lFeq7",
            "id":"2331",
            "instructions":[
            "Adjust the seat height and position yourself on the cycle cross trainer.",
            "Place your feet on the pedals and grip the handlebars.",
            "Start pedaling in a smooth and controlled motion.",
            "Maintain a steady pace and increase the resistance if desired.",
            "Continue pedaling for the desired duration of your cardio workout."
            ],
            "name":"cycle cross trainer",
            "secondaryMuscles":[
            "quadriceps",
            "hamstrings",
            "glutes"
            ],
            "target":"cardiovascular system"
            },
            {
            "bodyPart":"cardio",
            "equipment":"dumbbell",
            "gifUrl":"https://v2.exercisedb.io/image/oJn2jKoUI4eDwv",
            "id":"1201",
            "instructions":[
            "Start in a standing position with your feet shoulder-width apart and a dumbbell in each hand.",
            "Lower your body into a squat position, placing the dumbbells on the ground in front of you.",
            "Kick your feet back into a push-up position, keeping your body in a straight line.",
            "Perform a push-up, bending your elbows and lowering your chest towards the ground.",
            "Jump your feet back towards your hands, landing in a squat position.",
            "Stand up explosively, lifting the dumbbells off the ground and bringing them to your shoulders.",
            "Press the dumbbells overhead, fully extending your arms.",
            "Lower the dumbbells back to your shoulders and repeat the entire sequence for the desired number of repetitions."
            ],
            "name":"dumbbell burpee",
            "secondaryMuscles":[
            "quadriceps",
            "hamstrings",
            "calves",
            "shoulders",
            "triceps",
            "core"
            ],
            "target":"cardiovascular system"
            },
            {
            "bodyPart":"cardio",
            "equipment":"body weight",
            "gifUrl":"https://v2.exercisedb.io/image/p1eUHycMXjVBid",
            "id":"3221",
            "instructions":[
            "Stand with your feet shoulder-width apart.",
            "Bend your knees and lower your body down as if you were sitting back into a chair.",
            "Keep your chest up and your weight in your heels.",
            "Pause for a moment at the bottom, then push through your heels to return to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"half knee bends (male)",
            "secondaryMuscles":[
            "quadriceps",
            "hamstrings",
            "glutes"
            ],
            "target":"cardiovascular system"
            },
            {
            "bodyPart":"cardio",
            "equipment":"body weight",
            "gifUrl":"https://v2.exercisedb.io/image/5iKcOsS2KsiMC9",
            "id":"3636",
            "instructions":[
            "Stand facing a wall with your feet hip-width apart.",
            "Place your hands on the wall for support.",
            "Engage your core and lift your right knee up towards your chest, while keeping your left foot on the ground.",
            "Quickly switch legs, bringing your left knee up towards your chest and lowering your right foot back down.",
            "Continue alternating legs in a running motion, bringing your knees up as high as possible.",
            "Maintain a fast pace and keep your upper body stable throughout the exercise.",
            "Repeat for the desired duration or number of repetitions."
            ],
            "name":"high knee against wall",
            "secondaryMuscles":[
            "quadriceps",
            "hamstrings",
            "glutes",
            "calves"
            ],
            "target":"cardiovascular system"
            },
            {
            "bodyPart":"cardio",
            "equipment":"body weight",
            "gifUrl":"https://v2.exercisedb.io/image/Aubljm9NajL2hL",
            "id":"0501",
            "instructions":[
            "Start in a standing position with your feet shoulder-width apart.",
            "Lower your body into a squat position, placing your hands on the ground in front of you.",
            "Kick your feet back, landing in a push-up position.",
            "Perform a push-up, lowering your chest to the ground and then pushing back up.",
            "Jump your feet forward, landing in a squat position.",
            "Jump up explosively, reaching your arms overhead.",
            "Land softly and immediately lower back into the squat position to begin the next repetition."
            ],
            "name":"jack burpee",
            "secondaryMuscles":[
            "quadriceps",
            "hamstrings",
            "calves",
            "shoulders",
            "triceps",
            "core"
            ],
            "target":"cardiovascular system"
            },
            {
            "bodyPart":"cardio",
            "equipment":"body weight",
            "gifUrl":"https://v2.exercisedb.io/image/Tn7D2tVLOTNrOa",
            "id":"3224",
            "instructions":[
            "Stand with your feet together and your arms by your sides.",
            "Jump up, spreading your feet apart and raising your arms above your head.",
            "As you land, quickly jump back to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"jack jump (male)",
            "secondaryMuscles":[
            "quadriceps",
            "calves"
            ],
            "target":"cardiovascular system"
            }
      ],
      chest: [
        {
            "bodyPart":"chest",
            "equipment":"body weight",
            "gifUrl":"https://v2.exercisedb.io/image/ZywFB4vp71o3IS",
            "id":"3294",
            "instructions":[
            "Start in a push-up position with your hands slightly wider than shoulder-width apart.",
            "Extend one arm straight out to the side, parallel to the ground.",
            "Lower your body by bending your elbows, keeping your back straight and core engaged.",
            "Push back up to the starting position.",
            "Repeat on the other side, extending the opposite arm out to the side.",
            "Continue alternating sides for the desired number of repetitions."
            ],
            "name":"archer push up",
            "secondaryMuscles":[
            "triceps",
            "shoulders",
            "core"
            ],
            "target":"pectorals"
            },
            {
            "bodyPart":"chest",
            "equipment":"leverage machine",
            "gifUrl":"https://v2.exercisedb.io/image/1q4oTt2NZDeMPP",
            "id":"0009",
            "instructions":[
            "Adjust the machine to your desired height and secure your knees on the pad.",
            "Grasp the handles with your palms facing down and your arms fully extended.",
            "Lower your body by bending your elbows until your upper arms are parallel to the floor.",
            "Pause for a moment, then push yourself back up to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"assisted chest dip (kneeling)",
            "secondaryMuscles":[
            "triceps",
            "shoulders"
            ],
            "target":"pectorals"
            },
            {
            "bodyPart":"chest",
            "equipment":"assisted",
            "gifUrl":"https://v2.exercisedb.io/image/BzR6p76P9wET8h",
            "id":"1716",
            "instructions":[
            "Sit on a stability ball with your feet flat on the ground and your back straight.",
            "Hold a stability ball with both hands and extend your arms straight out in front of you.",
            "Slowly lower the stability ball towards your chest, feeling a stretch in your pectoral muscles.",
            "Hold the stretch for a few seconds, then slowly return to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"assisted seated pectoralis major stretch with stability ball",
            "secondaryMuscles":[
            "shoulders",
            "triceps"
            ],
            "target":"pectorals"
            },
            {
            "bodyPart":"chest",
            "equipment":"leverage machine",
            "gifUrl":"https://v2.exercisedb.io/image/MZzQvoLx6Kmvug",
            "id":"2364",
            "instructions":[
            "Adjust the machine to your desired height and secure your knees on the pad.",
            "Grasp the handles with a wide grip and keep your elbows slightly bent.",
            "Lower your body by bending your elbows until your upper arms are parallel to the floor.",
            "Push yourself back up to the starting position by extending your arms.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"assisted wide-grip chest dip (kneeling)",
            "secondaryMuscles":[
            "triceps",
            "shoulders"
            ],
            "target":"pectorals"
            },
            {
            "bodyPart":"chest",
            "equipment":"band",
            "gifUrl":"https://v2.exercisedb.io/image/vhpa61OzPT3CVR",
            "id":"1254",
            "instructions":[
            "Lie flat on a bench with your feet flat on the ground and your back pressed against the bench.",
            "Grasp the band handles with an overhand grip, slightly wider than shoulder-width apart.",
            "Extend your arms fully, pushing the bands away from your chest.",
            "Slowly lower the bands back down to your chest, keeping your elbows at a 90-degree angle.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"band bench press",
            "secondaryMuscles":[
            "triceps",
            "shoulders"
            ],
            "target":"pectorals"
            },
            {
            "bodyPart":"chest",
            "equipment":"band",
            "gifUrl":"https://v2.exercisedb.io/image/1Fp5TW142ozz5x",
            "id":"0989",
            "instructions":[
            "Attach the band to a sturdy anchor point at chest height.",
            "Stand with your side facing the anchor point and grab the band with one hand.",
            "Step away from the anchor point to create tension in the band.",
            "Position your feet shoulder-width apart and slightly bend your knees.",
            "Bring your hand holding the band across your body, towards the opposite shoulder.",
            "While maintaining tension in the band, push your hand forward and away from your body, extending your arm.",
            "Slowly return to the starting position and repeat for the desired number of repetitions.",
            "Switch sides and repeat the exercise with the other hand."
            ],
            "name":"band one arm twisting chest press",
            "secondaryMuscles":[
            "shoulders",
            "triceps"
            ],
            "target":"pectorals"
            },
            {
            "bodyPart":"chest",
            "equipment":"barbell",
            "gifUrl":"https://v2.exercisedb.io/image/tvAGYhmPkC9oBt",
            "id":"0025",
            "instructions":[
            "Lie flat on a bench with your feet flat on the ground and your back pressed against the bench.",
            "Grasp the barbell with an overhand grip slightly wider than shoulder-width apart.",
            "Lift the barbell off the rack and hold it directly above your chest with your arms fully extended.",
            "Lower the barbell slowly towards your chest, keeping your elbows tucked in.",
            "Pause for a moment when the barbell touches your chest.",
            "Push the barbell back up to the starting position by extending your arms.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"barbell bench press",
            "secondaryMuscles":[
            "triceps",
            "shoulders"
            ],
            "target":"pectorals"
            },
            {
            "bodyPart":"chest",
            "equipment":"barbell",
            "gifUrl":"https://v2.exercisedb.io/image/H0xeuGjeEAn4To",
            "id":"0033",
            "instructions":[
            "Lie on a decline bench with your feet secured and your head lower than your hips.",
            "Grasp the barbell with an overhand grip slightly wider than shoulder-width apart.",
            "Unrack the barbell and lower it slowly towards your chest, keeping your elbows tucked in.",
            "Pause for a moment at the bottom, then push the barbell back up to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"barbell decline bench press",
            "secondaryMuscles":[
            "triceps",
            "shoulders"
            ],
            "target":"pectorals"
            },
            {
            "bodyPart":"chest",
            "equipment":"barbell",
            "gifUrl":"https://v2.exercisedb.io/image/E4kiwgCXX8BLjx",
            "id":"1255",
            "instructions":[
            "Lie down on a decline bench with your head lower than your hips and your feet secured.",
            "Hold the barbell with a pronated grip (palms facing away from you) and your hands slightly wider than shoulder-width apart.",
            "Extend your arms above your chest, keeping a slight bend in your elbows.",
            "Lower the barbell in an arc motion behind your head, feeling a stretch in your chest and shoulders.",
            "Pause for a moment, then return the barbell to the starting position by reversing the motion.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"barbell decline pullover",
            "secondaryMuscles":[
            "triceps",
            "shoulders"
            ],
            "target":"pectorals"
            },
            {
            "bodyPart":"chest",
            "equipment":"barbell",
            "gifUrl":"https://v2.exercisedb.io/image/XnPljvAN5XMfA5",
            "id":"0036",
            "instructions":[
            "Lie on a decline bench with your feet secured and your head lower than your hips.",
            "Grasp the barbell with a wide grip, slightly wider than shoulder-width apart.",
            "Lower the barbell to your chest, keeping your elbows out to the sides.",
            "Push the barbell back up to the starting position, fully extending your arms.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"barbell decline wide-grip press",
            "secondaryMuscles":[
            "triceps",
            "shoulders"
            ],
            "target":"pectorals"
            }
      ],
      "lower arms": [
        {
            "bodyPart":"lower arms",
            "equipment":"band",
            "gifUrl":"https://v2.exercisedb.io/image/dWG1-09F95nb67",
            "id":"0994",
            "instructions":[
            "Sit on a bench or chair with your feet flat on the ground.",
            "Hold the band with an overhand grip, palms facing down, and wrap it around your fingers.",
            "Rest your forearms on your thighs, with your wrists hanging off the edge.",
            "Slowly curl your wrists upward, squeezing your forearms.",
            "Pause for a moment at the top, then slowly lower your wrists back down to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"band reverse wrist curl",
            "secondaryMuscles":[
            "forearms"
            ],
            "target":"forearms"
            },
            {
            "bodyPart":"lower arms",
            "equipment":"band",
            "gifUrl":"https://v2.exercisedb.io/image/vFLtmtc9JRTnpn",
            "id":"1016",
            "instructions":[
            "Sit on a bench or chair with your feet flat on the ground.",
            "Hold the band with both hands, palms facing up, and rest your forearms on your thighs.",
            "Slowly curl your wrists upward, squeezing your forearms.",
            "Pause for a moment at the top, then slowly lower your wrists back down to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"band wrist curl",
            "secondaryMuscles":[
            "biceps",
            "triceps"
            ],
            "target":"forearms"
            },
            {
            "bodyPart":"lower arms",
            "equipment":"barbell",
            "gifUrl":"https://v2.exercisedb.io/image/-GywcG9l8jSMjm",
            "id":"1411",
            "instructions":[
            "Sit on a bench with your feet flat on the ground and your forearms resting on your thighs, palms facing down.",
            "Hold a barbell with an overhand grip, hands shoulder-width apart.",
            "Lower the barbell towards the ground by flexing your wrists, keeping your forearms stationary.",
            "Pause for a moment at the bottom, then slowly raise the barbell back up by extending your wrists.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"barbell palms down wrist curl over a bench",
            "secondaryMuscles":[
            "biceps",
            "brachialis"
            ],
            "target":"forearms"
            },
            {
            "bodyPart":"lower arms",
            "equipment":"barbell",
            "gifUrl":"https://v2.exercisedb.io/image/DiG0hvhN4-tEPv",
            "id":"1412",
            "instructions":[
            "Sit on a bench with your feet flat on the ground and hold a barbell with an underhand grip, palms facing up.",
            "Rest your forearms on the bench, allowing your wrists to hang off the edge.",
            "Keeping your forearms stationary, exhale and curl your wrists upwards as far as possible.",
            "Hold the contracted position for a brief pause, then inhale and slowly lower the barbell back to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"barbell palms up wrist curl over a bench",
            "secondaryMuscles":[
            "biceps",
            "shoulders"
            ],
            "target":"forearms"
            },
            {
            "bodyPart":"lower arms",
            "equipment":"barbell",
            "gifUrl":"https://v2.exercisedb.io/image/gwKNM-fOFLP2zw",
            "id":"0079",
            "instructions":[
            "Sit on a bench with your feet flat on the ground and your knees bent.",
            "Hold a barbell with an overhand grip, palms facing down, and your hands shoulder-width apart.",
            "Rest your forearms on your thighs, allowing your wrists to hang off the edge.",
            "Keeping your forearms stationary, exhale and curl your wrists upward as far as possible.",
            "Hold the contracted position for a brief pause, then inhale and slowly lower the barbell back to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"barbell revers wrist curl v. 2",
            "secondaryMuscles":[
            "biceps",
            "brachialis"
            ],
            "target":"forearms"
            },
            {
            "bodyPart":"lower arms",
            "equipment":"barbell",
            "gifUrl":"https://v2.exercisedb.io/image/emzxedTnfB9siN",
            "id":"0082",
            "instructions":[
            "Sit on a bench with your feet flat on the ground and hold a barbell with an overhand grip, palms facing down.",
            "Rest your forearms on your thighs, allowing your wrists to hang off the edge.",
            "Slowly curl your wrists upward, bringing the barbell towards your body.",
            "Pause for a moment at the top, then slowly lower the barbell back down to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"barbell reverse wrist curl",
            "secondaryMuscles":[
            "biceps",
            "brachialis"
            ],
            "target":"forearms"
            },
            {
            "bodyPart":"lower arms",
            "equipment":"barbell",
            "gifUrl":"https://v2.exercisedb.io/image/Zhi255asAFOHFJ",
            "id":"0104",
            "instructions":[
            "Stand up straight with your feet shoulder-width apart and hold a barbell with an overhand grip.",
            "Rest the barbell on the back of your hands with your palms facing down and your fingers pointing towards your body.",
            "Keeping your upper arms stationary, exhale and curl your wrists upwards as far as possible.",
            "Hold the contracted position for a brief pause, then inhale and slowly lower the barbell back to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"barbell standing back wrist curl",
            "secondaryMuscles":[
            "biceps",
            "shoulders"
            ],
            "target":"forearms"
            },
            {
            "bodyPart":"lower arms",
            "equipment":"barbell",
            "gifUrl":"https://v2.exercisedb.io/image/Pz-ntuqRj2jhxH",
            "id":"0126",
            "instructions":[
            "Sit on a bench with your feet flat on the ground and your forearms resting on your thighs, holding a barbell with an underhand grip.",
            "Allow the barbell to roll down to your fingertips, keeping your wrists straight.",
            "Slowly curl the barbell up towards your forearms by flexing your wrists.",
            "Pause for a moment at the top, then slowly lower the barbell back down to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"barbell wrist curl",
            "secondaryMuscles":[
            "biceps",
            "brachialis"
            ],
            "target":"forearms"
            },
            {
            "bodyPart":"lower arms",
            "equipment":"barbell",
            "gifUrl":"https://v2.exercisedb.io/image/OiV-gHBloQPQI-",
            "id":"0125",
            "instructions":[
            "Sit on a bench with your feet flat on the ground and your knees bent.",
            "Hold a barbell with an underhand grip, palms facing up, and your hands shoulder-width apart.",
            "Rest your forearms on your thighs, allowing your wrists to hang off the edge.",
            "Slowly curl your wrists upward, bringing the barbell towards your forearms.",
            "Pause for a moment at the top, then slowly lower the barbell back down to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"barbell wrist curl v. 2",
            "secondaryMuscles":[
            "biceps",
            "brachialis"
            ],
            "target":"forearms"
            },
            {
            "bodyPart":"lower arms",
            "equipment":"cable",
            "gifUrl":"https://v2.exercisedb.io/image/AnUtyl1G9mnDGj",
            "id":"0210",
            "instructions":[
            "Attach a cable to a low pulley and sit on a bench facing the cable machine.",
            "Grasp the cable handle with an overhand grip, palms facing down.",
            "Rest your forearms on your thighs, with your wrists hanging off the edge.",
            "Keeping your forearms stationary, exhale and curl your wrists upward as far as possible.",
            "Pause for a moment at the top, then inhale and slowly lower your wrists back down to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"cable reverse wrist curl",
            "secondaryMuscles":[
            "forearms",
            "wrists"
            ],
            "target":"forearms"
            }
      ],
      "lower legs": [
        {
            "bodyPart":"lower legs",
            "equipment":"body weight",
            "gifUrl":"https://v2.exercisedb.io/image/CvqGFsmKjP9FH-",
            "id":"1368",
            "instructions":[
            "Sit on the ground with your legs extended in front of you.",
            "Lift one leg off the ground and rotate your ankle in a circular motion.",
            "Perform the desired number of circles in one direction, then switch to the other direction.",
            "Repeat with the other leg."
            ],
            "name":"ankle circles",
            "secondaryMuscles":[
            "ankle stabilizers"
            ],
            "target":"calves"
            },
            {
            "bodyPart":"lower legs",
            "equipment":"assisted",
            "gifUrl":"https://v2.exercisedb.io/image/41mDyD0qMsJ8Ck",
            "id":"1708",
            "instructions":[
            "Lie on your back with your legs extended.",
            "Bend one knee and place your foot flat on the ground.",
            "Using your hands or a towel, gently pull your toes towards your body, feeling a stretch in your calf.",
            "Hold the stretch for 20-30 seconds.",
            "Release the stretch and repeat on the other leg."
            ],
            "name":"assisted lying calves stretch",
            "secondaryMuscles":[
            "hamstrings"
            ],
            "target":"calves"
            },
            {
            "bodyPart":"lower legs",
            "equipment":"band",
            "gifUrl":"https://v2.exercisedb.io/image/8gkuub8ydjiGCp",
            "id":"0999",
            "instructions":[
            "Stand with your feet hip-width apart and place the band around the ball of your left foot.",
            "Hold onto a stable object for balance if needed.",
            "Slowly raise your left heel off the ground, lifting your body weight onto the ball of your foot.",
            "Pause for a moment at the top, then slowly lower your left heel back down to the starting position.",
            "Repeat for the desired number of repetitions, then switch to the right leg."
            ],
            "name":"band single leg calf raise",
            "secondaryMuscles":[
            "ankles",
            "feet"
            ],
            "target":"calves"
            },
            {
            "bodyPart":"lower legs",
            "equipment":"band",
            "gifUrl":"https://v2.exercisedb.io/image/kGuV0DYLV0M2FQ",
            "id":"1000",
            "instructions":[
            "Stand with your feet hip-width apart and place the band around the ball of your foot.",
            "Hold onto a stable object for balance.",
            "Slowly raise your heel off the ground, lifting your body weight onto the ball of your foot.",
            "Pause for a moment at the top, then slowly lower your heel back down to the starting position.",
            "Repeat for the desired number of repetitions, then switch to the other leg."
            ],
            "name":"band single leg reverse calf raise",
            "secondaryMuscles":[
            "hamstrings",
            "glutes"
            ],
            "target":"calves"
            },
            {
            "bodyPart":"lower legs",
            "equipment":"band",
            "gifUrl":"https://v2.exercisedb.io/image/7Vwl9c2VF8opjS",
            "id":"1369",
            "instructions":[
            "Stand with your feet shoulder-width apart and place a resistance band under both feet.",
            "Hold the ends of the band with your hands for stability.",
            "Raise your heels off the ground as high as possible, using your calves.",
            "Pause for a moment at the top, then slowly lower your heels back down to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"band two legs calf raise - (band under both legs) v. 2",
            "secondaryMuscles":[
            "ankles",
            "feet"
            ],
            "target":"calves"
            },
            {
            "bodyPart":"lower legs",
            "equipment":"barbell",
            "gifUrl":"https://v2.exercisedb.io/image/rFSVwOdrpik4VU",
            "id":"1370",
            "instructions":[
            "Place a barbell on the floor in front of you.",
            "Stand with the balls of your feet on the edge of the barbell, with your heels hanging off.",
            "Hold onto a stable object for balance if needed.",
            "Raise your heels as high as possible, using your calves to lift your body.",
            "Pause for a moment at the top, then slowly lower your heels back down to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"barbell floor calf raise",
            "secondaryMuscles":[
            "hamstrings"
            ],
            "target":"calves"
            },
            {
            "bodyPart":"lower legs",
            "equipment":"barbell",
            "gifUrl":"https://v2.exercisedb.io/image/sUnfXUBNV3ok4R",
            "id":"0088",
            "instructions":[
            "Sit on a bench with your feet flat on the floor and a barbell resting on your thighs.",
            "Place the balls of your feet on a raised platform, such as a block or step.",
            "Position the barbell across your thighs and hold it securely with your hands.",
            "Keeping your back straight and your core engaged, lift your heels off the ground by extending your ankles.",
            "Pause for a moment at the top, then slowly lower your heels back down to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"barbell seated calf raise",
            "secondaryMuscles":[
            "hamstrings",
            "quadriceps"
            ],
            "target":"calves"
            },
            {
            "bodyPart":"lower legs",
            "equipment":"barbell",
            "gifUrl":"https://v2.exercisedb.io/image/jb2IC2jT-XHp6K",
            "id":"1371",
            "instructions":[
            "Sit on a bench with your feet flat on the floor and a barbell resting on your thighs.",
            "Place the balls of your feet on a raised platform, such as a block or step.",
            "Lower your heels as far as possible, feeling a stretch in your calves.",
            "Raise your heels as high as possible, contracting your calves.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"barbell seated calf raise",
            "secondaryMuscles":[
            "hamstrings"
            ],
            "target":"calves"
            },
            {
            "bodyPart":"lower legs",
            "equipment":"barbell",
            "gifUrl":"https://v2.exercisedb.io/image/lQ2KBRDsCXyZzm",
            "id":"1372",
            "instructions":[
            "Stand with your feet shoulder-width apart and place a barbell across your upper back.",
            "Raise your heels off the ground as high as possible, using only your toes.",
            "Pause for a moment at the top, then slowly lower your heels back down to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"barbell standing calf raise",
            "secondaryMuscles":[
            "hamstrings",
            "glutes"
            ],
            "target":"calves"
            },
            {
            "bodyPart":"lower legs",
            "equipment":"barbell",
            "gifUrl":"https://v2.exercisedb.io/image/HDe-jdTd9ETtgk",
            "id":"0108",
            "instructions":[
            "Stand with your feet shoulder-width apart and place a barbell across your upper back.",
            "Raise your heels off the ground as high as possible, using your calves.",
            "Pause for a moment at the top, then slowly lower your heels back down to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"barbell standing leg calf raise",
            "secondaryMuscles":[
            "hamstrings",
            "glutes"
            ],
            "target":"calves"
            }
      ],
      neck: [
        
{
    "bodyPart":"neck",
    "equipment":"body weight",
    "gifUrl":"https://v2.exercisedb.io/image/01aJcJaDotLVT9",
    "id":"1403",
    "instructions":[
    "Stand or sit up straight with your shoulders relaxed.",
    "Tilt your head to one side, bringing your ear towards your shoulder.",
    "Hold the stretch for 15-30 seconds.",
    "Repeat on the other side.",
    "Perform 2-4 sets on each side."
    ],
    "name":"neck side stretch",
    "secondaryMuscles":[
    "trapezius",
    "sternocleidomastoid"
    ],
    "target":"levator scapulae"
    },
    {
    "bodyPart":"neck",
    "equipment":"body weight",
    "gifUrl":"https://v2.exercisedb.io/image/z9XmKCAHAvm6Ia",
    "id":"0716",
    "instructions":[
    "Stand or sit up straight with your shoulders relaxed.",
    "Tilt your head to the right, bringing your right ear towards your right shoulder.",
    "Place your right hand on the left side of your head and gently apply pressure to increase the stretch.",
    "Hold the stretch for 15-30 seconds.",
    "Repeat on the other side, tilting your head to the left and applying pressure with your left hand.",
    "Repeat the stretch 2-3 times on each side."
    ],
    "name":"side push neck stretch",
    "secondaryMuscles":[
    "trapezius",
    "sternocleidomastoid"
    ],
    "target":"levator scapulae"
    }
      ],
      shoulders: [
        {
            "bodyPart":"shoulders",
            "equipment":"band",
            "gifUrl":"https://v2.exercisedb.io/image/kZ4uey4uPVpx2h",
            "id":"0977",
            "instructions":[
            "Stand with your feet shoulder-width apart and hold the band in front of your thighs with your palms facing down.",
            "Keep your arms straight and lift the band up in front of you until your arms are parallel to the ground.",
            "Pause for a moment at the top, then slowly lower the band back down to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"band front lateral raise",
            "secondaryMuscles":[
            "traps",
            "upper back"
            ],
            "target":"delts"
            },
            {
            "bodyPart":"shoulders",
            "equipment":"band",
            "gifUrl":"https://v2.exercisedb.io/image/bb-WB0Q-yBR3lA",
            "id":"0978",
            "instructions":[
            "Stand with your feet shoulder-width apart and hold the band in front of your thighs with your palms facing down.",
            "Keep your arms straight and slowly raise them forward until they are parallel to the ground.",
            "Pause for a moment at the top, then slowly lower your arms back down to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"band front raise",
            "secondaryMuscles":[
            "triceps",
            "upper back"
            ],
            "target":"delts"
            },
            {
            "bodyPart":"shoulders",
            "equipment":"band",
            "gifUrl":"https://v2.exercisedb.io/image/pjiIVNAbQfXOgA",
            "id":"0993",
            "instructions":[
            "Attach the band to a stationary object at chest height.",
            "Stand with your feet shoulder-width apart and hold the band with both hands in front of you.",
            "Keep your arms straight and lift them out to the sides until they are parallel to the ground.",
            "Squeeze your shoulder blades together at the top of the movement.",
            "Slowly lower your arms back to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"band reverse fly",
            "secondaryMuscles":[
            "upper back",
            "trapezius"
            ],
            "target":"delts"
            },
            {
            "bodyPart":"shoulders",
            "equipment":"band",
            "gifUrl":"https://v2.exercisedb.io/image/NL-NbUg5AtHonB",
            "id":"0997",
            "instructions":[
            "Stand with your feet shoulder-width apart and place the band under your feet.",
            "Hold the band with your palms facing forward and raise your hands to shoulder height, elbows bent.",
            "Press the band overhead, fully extending your arms.",
            "Pause for a moment at the top, then slowly lower the band back to shoulder height.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"band shoulder press",
            "secondaryMuscles":[
            "triceps",
            "upper back"
            ],
            "target":"delts"
            },
            {
            "bodyPart":"shoulders",
            "equipment":"band",
            "gifUrl":"https://v2.exercisedb.io/image/zYBKNdhfLTjoLy",
            "id":"1022",
            "instructions":[
            "Stand with your feet shoulder-width apart and place the band under your feet.",
            "Hold the band handles with your palms facing each other and your arms extended in front of you.",
            "Bend your knees slightly and hinge forward at the hips, keeping your back straight.",
            "Pull the band towards your chest, squeezing your shoulder blades together.",
            "Pause for a moment at the top, then slowly release the tension and return to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"band standing rear delt row",
            "secondaryMuscles":[
            "trapezius",
            "rhomboids",
            "biceps"
            ],
            "target":"delts"
            },
            {
            "bodyPart":"shoulders",
            "equipment":"band",
            "gifUrl":"https://v2.exercisedb.io/image/4y4nHdAonC2gUa",
            "id":"1012",
            "instructions":[
            "Stand with your feet shoulder-width apart and place the band under your feet.",
            "Hold the band handles at shoulder height with your palms facing forward.",
            "Engage your core and press the band overhead, fully extending your arms.",
            "As you press, twist your torso to one side, keeping your hips stable.",
            "Pause for a moment at the top, then return to the starting position.",
            "Repeat the press and twist on the opposite side.",
            "Continue alternating sides for the desired number of repetitions."
            ],
            "name":"band twisting overhead press",
            "secondaryMuscles":[
            "triceps",
            "upper back"
            ],
            "target":"delts"
            },
            {
            "bodyPart":"shoulders",
            "equipment":"band",
            "gifUrl":"https://v2.exercisedb.io/image/HdkMTsbhbppbvI",
            "id":"1017",
            "instructions":[
            "Stand with your feet shoulder-width apart and hold the band in front of your thighs with your palms facing inwards.",
            "Keep your arms straight and lift them up and out to the sides, forming a 'Y' shape with your body.",
            "Squeeze your shoulder blades together at the top of the movement.",
            "Slowly lower your arms back down to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"band y-raise",
            "secondaryMuscles":[
            "traps",
            "rhomboids"
            ],
            "target":"delts"
            },
            {
            "bodyPart":"shoulders",
            "equipment":"barbell",
            "gifUrl":"https://v2.exercisedb.io/image/ORx1ojB8OXXTu6",
            "id":"0041",
            "instructions":[
            "Stand with your feet shoulder-width apart and hold a barbell in front of your thighs with an overhand grip.",
            "Keep your arms straight and lift the barbell forward and upward until it reaches shoulder level.",
            "Pause for a moment at the top, then slowly lower the barbell back down to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"barbell front raise",
            "secondaryMuscles":[
            "biceps",
            "triceps"
            ],
            "target":"delts"
            },
            {
            "bodyPart":"shoulders",
            "equipment":"barbell",
            "gifUrl":"https://v2.exercisedb.io/image/QRr-C6eU56MNgo",
            "id":"0067",
            "instructions":[
            "Stand with your feet shoulder-width apart, toes pointing slightly outwards.",
            "Hold the barbell with an overhand grip, hands slightly wider than shoulder-width apart.",
            "Bend your knees and lower your hips into a squat position, keeping your back straight and chest up.",
            "Explosively extend your hips, knees, and ankles, driving the barbell upwards.",
            "As the barbell reaches chest level, pull it upwards with your arm, keeping it close to your body.",
            "Rotate your elbow under the barbell and extend your arm fully overhead, locking out your elbow.",
            "Lower the barbell back down to the starting position in a controlled manner.",
            "Repeat for the desired number of repetitions, then switch arms."
            ],
            "name":"barbell one arm snatch",
            "secondaryMuscles":[
            "traps",
            "forearms",
            "core"
            ],
            "target":"delts"
            },
            {
            "bodyPart":"shoulders",
            "equipment":"barbell",
            "gifUrl":"https://v2.exercisedb.io/image/Stzfp4ovNbw3x9",
            "id":"0075",
            "instructions":[
            "Stand with your feet shoulder-width apart and hold a barbell with an overhand grip, palms facing down.",
            "Bend your knees slightly and hinge forward at the hips, keeping your back straight.",
            "Raise the barbell out to the sides, keeping your arms straight, until they are parallel to the ground.",
            "Pause for a moment at the top, then slowly lower the barbell back to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"barbell rear delt raise",
            "secondaryMuscles":[
            "traps",
            "rhomboids"
            ],
            "target":"delts"
            }
      ],
      "upper arms": [
        {
            "bodyPart":"upper arms",
            "equipment":"assisted",
            "gifUrl":"https://v2.exercisedb.io/image/jBFA88y7K16fCi",
            "id":"0018",
            "instructions":[
            "Stand with your feet shoulder-width apart and hold a towel with both hands behind your head.",
            "Keep your elbows close to your ears and your upper arms stationary.",
            "Slowly extend your forearms upward, squeezing your triceps at the top.",
            "Pause for a moment, then slowly lower the towel back down to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"assisted standing triceps extension (with towel)",
            "secondaryMuscles":[
            "shoulders"
            ],
            "target":"triceps"
            },
            {
            "bodyPart":"upper arms",
            "equipment":"leverage machine",
            "gifUrl":"https://v2.exercisedb.io/image/kCGP9hP1RXyQVk",
            "id":"0019",
            "instructions":[
            "Adjust the machine to your desired weight and height.",
            "Kneel down on the pad facing the machine, with your hands gripping the handles.",
            "Lower your body by bending your elbows, keeping your back straight and close to the machine.",
            "Pause for a moment at the bottom, then push yourself back up to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"assisted triceps dip (kneeling)",
            "secondaryMuscles":[
            "chest",
            "shoulders"
            ],
            "target":"triceps"
            },
            {
            "bodyPart":"upper arms",
            "equipment":"band",
            "gifUrl":"https://v2.exercisedb.io/image/g1krA-tJ4tto1o",
            "id":"0968",
            "instructions":[
            "Stand with your feet shoulder-width apart and hold the band with an underhand grip, palms facing up.",
            "Keep your elbows close to your sides and slowly curl one arm up towards your shoulder, squeezing your biceps at the top.",
            "Lower the arm back down to the starting position and repeat with the other arm.",
            "Continue alternating arms for the desired number of repetitions."
            ],
            "name":"band alternating biceps curl",
            "secondaryMuscles":[
            "forearms"
            ],
            "target":"biceps"
            },
            {
            "bodyPart":"upper arms",
            "equipment":"band",
            "gifUrl":"https://v2.exercisedb.io/image/qxG6JVLG1tkjEd",
            "id":"0975",
            "instructions":[
            "Place a band around your upper arms, just above the elbows.",
            "Assume a push-up position with your hands directly under your shoulders and your body in a straight line from head to heels.",
            "Bend your elbows and lower your chest towards the ground, keeping your elbows close to your sides.",
            "Push through your palms to extend your arms and return to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"band close-grip push-up",
            "secondaryMuscles":[
            "chest",
            "shoulders"
            ],
            "target":"triceps"
            },
            {
            "bodyPart":"upper arms",
            "equipment":"band",
            "gifUrl":"https://v2.exercisedb.io/image/kWRUQzD7oSjCZX",
            "id":"0976",
            "instructions":[
            "Sit on a bench or chair with your legs spread apart and your feet flat on the ground.",
            "Hold one end of the band in your hand and step on the other end with your foot on the same side.",
            "Lean forward slightly and rest your elbow on the inside of your thigh, just above the knee.",
            "With your palm facing up, slowly curl your hand towards your shoulder, keeping your upper arm stationary.",
            "Pause for a moment at the top, then slowly lower your hand back down to the starting position.",
            "Repeat for the desired number of repetitions, then switch sides."
            ],
            "name":"band concentration curl",
            "secondaryMuscles":[
            "forearms"
            ],
            "target":"biceps"
            },
            {
            "bodyPart":"upper arms",
            "equipment":"band",
            "gifUrl":"https://v2.exercisedb.io/image/atgP9FQw8IEKN2",
            "id":"0986",
            "instructions":[
            "Stand with your feet shoulder-width apart and place one end of the band under your foot.",
            "Hold the other end of the band with your arm fully extended overhead, palm facing forward.",
            "Keeping your upper arm stationary, curl your forearm towards your shoulder, squeezing your biceps.",
            "Pause for a moment at the top, then slowly lower your forearm back to the starting position.",
            "Repeat for the desired number of repetitions, then switch arms."
            ],
            "name":"band one arm overhead biceps curl",
            "secondaryMuscles":[
            "forearms",
            "shoulders"
            ],
            "target":"biceps"
            },
            {
            "bodyPart":"upper arms",
            "equipment":"band",
            "gifUrl":"https://v2.exercisedb.io/image/JVECoxgN83CTj1",
            "id":"0998",
            "instructions":[
            "Stand with your feet shoulder-width apart and hold the band with both hands, palms facing down.",
            "Extend your arms straight out to the sides, keeping them parallel to the ground.",
            "Slowly bend your elbows and bring your hands towards your shoulders, keeping your upper arms still.",
            "Pause for a moment, then slowly extend your arms back out to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"band side triceps extension",
            "secondaryMuscles":[
            "shoulders"
            ],
            "target":"triceps"
            },
            {
            "bodyPart":"upper arms",
            "equipment":"barbell",
            "gifUrl":"https://v2.exercisedb.io/image/VnByPcz3T3VLb3",
            "id":"0023",
            "instructions":[
            "Stand up straight with your feet shoulder-width apart and hold a barbell in each hand, palms facing forward.",
            "Keep your upper arms stationary and exhale as you curl the weights while contracting your biceps.",
            "Continue to raise the barbells until your biceps are fully contracted and the barbells are at shoulder level.",
            "Hold the contracted position for a brief pause as you squeeze your biceps.",
            "Inhale as you slowly begin to lower the barbells back to the starting position.",
            "Repeat for the desired number of repetitions, alternating arms."
            ],
            "name":"barbell alternate biceps curl",
            "secondaryMuscles":[
            "forearms"
            ],
            "target":"biceps"
            },
            {
            "bodyPart":"upper arms",
            "equipment":"barbell",
            "gifUrl":"https://v2.exercisedb.io/image/pRCXHHUwoloKlR",
            "id":"2407",
            "instructions":[
            "Stand up straight with your feet shoulder-width apart and hold a barbell with an underhand grip, palms facing up.",
            "Place your upper arms against the arm blaster, keeping your elbows close to your torso.",
            "Keeping your upper arms stationary, exhale and curl the weights while contracting your biceps.",
            "Continue to raise the barbell until your biceps are fully contracted and the bar is at shoulder level.",
            "Hold the contracted position for a brief pause as you squeeze your biceps.",
            "Inhale and slowly begin to lower the barbell back to the starting position.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"barbell biceps curl (with arm blaster)",
            "secondaryMuscles":[
            "forearms"
            ],
            "target":"biceps"
            },
            {
            "bodyPart":"upper arms",
            "equipment":"barbell",
            "gifUrl":"https://v2.exercisedb.io/image/HksjhW6devnMOm",
            "id":"0030",
            "instructions":[
            "Lie flat on a bench with your feet flat on the ground and your back pressed against the bench.",
            "Grasp the barbell with a close grip, slightly narrower than shoulder-width apart.",
            "Unrack the barbell and lower it slowly towards your chest, keeping your elbows close to your body.",
            "Pause for a moment when the barbell touches your chest.",
            "Push the barbell back up to the starting position, fully extending your arms.",
            "Repeat for the desired number of repetitions."
            ],
            "name":"barbell close-grip bench press",
            "secondaryMuscles":[
            "chest",
            "shoulders"
            ],
            "target":"triceps"
            }
      ],
      "upper legs": [
        
{
    "bodyPart":"upper legs",
    "equipment":"body weight",
    "gifUrl":"https://v2.exercisedb.io/image/xvZtV3CR1cY-O1",
    "id":"1512",
    "instructions":[
    "Start on all fours with your hands directly under your shoulders and your knees directly under your hips.",
    "Extend one leg straight back, keeping your knee bent and your foot flexed.",
    "Slowly lower your hips towards the ground, feeling a stretch in your quads.",
    "Hold this position for 20-30 seconds.",
    "Switch legs and repeat the stretch on the other side."
    ],
    "name":"all fours squad stretch",
    "secondaryMuscles":[
    "hamstrings",
    "glutes"
    ],
    "target":"quads"
    },
    {
    "bodyPart":"upper legs",
    "equipment":"body weight",
    "gifUrl":"https://v2.exercisedb.io/image/PsEVceu2e37HQP",
    "id":"3214",
    "instructions":[
    "Stand with your feet shoulder-width apart and arms extended to the sides.",
    "Keeping your legs straight, bend forward at the waist and reach down towards your toes with your right hand.",
    "As you reach down, simultaneously lift your left leg straight up behind you, maintaining balance.",
    "Return to the starting position and repeat the movement with your left hand reaching towards your toes and your right leg lifting up behind you.",
    "Continue alternating sides for the desired number of repetitions."
    ],
    "name":"arms apart circular toe touch (male)",
    "secondaryMuscles":[
    "hamstrings",
    "quadriceps",
    "calves"
    ],
    "target":"glutes"
    },
    {
    "bodyPart":"upper legs",
    "equipment":"assisted",
    "gifUrl":"https://v2.exercisedb.io/image/aHDGQ0VxZxWyZy",
    "id":"1709",
    "instructions":[
    "Lie on your back with your legs extended.",
    "Bend your right knee and place your right ankle on your left thigh, just above the knee.",
    "Grasp your left thigh with both hands and gently pull it towards your chest.",
    "Hold the stretch for 20-30 seconds.",
    "Release and repeat on the other side."
    ],
    "name":"assisted lying glutes stretch",
    "secondaryMuscles":[
    "hamstrings"
    ],
    "target":"glutes"
    },
    {
    "bodyPart":"upper legs",
    "equipment":"assisted",
    "gifUrl":"https://v2.exercisedb.io/image/u1s45E5CAWMhZq",
    "id":"1710",
    "instructions":[
    "Lie on your back with your legs extended.",
    "Bend your right knee and place your right ankle on your left thigh, just above the knee.",
    "Grasp your left thigh with both hands and gently pull it towards your chest.",
    "Hold the stretch for 20-30 seconds.",
    "Release the stretch and repeat on the other side."
    ],
    "name":"assisted lying gluteus and piriformis stretch",
    "secondaryMuscles":[
    "hamstrings"
    ],
    "target":"glutes"
    },
    {
    "bodyPart":"upper legs",
    "equipment":"assisted",
    "gifUrl":"https://v2.exercisedb.io/image/kAaRBGPoxr-uW4",
    "id":"0016",
    "instructions":[
    "Lie face down on a mat or bench with your legs fully extended.",
    "Have a partner or use a resistance band to secure your ankles.",
    "Engage your hamstrings and lift your legs towards your glutes, keeping your knees straight.",
    "Pause for a moment at the top, then slowly lower your legs back down to the starting position.",
    "Repeat for the desired number of repetitions."
    ],
    "name":"assisted prone hamstring",
    "secondaryMuscles":[
    "glutes",
    "lower back"
    ],
    "target":"hamstrings"
    },
    {
    "bodyPart":"upper legs",
    "equipment":"assisted",
    "gifUrl":"https://v2.exercisedb.io/image/tl3yfkkJUiWH51",
    "id":"1713",
    "instructions":[
    "Lie face down on the ground with your legs extended.",
    "Bend your left knee and reach back with your left hand to grab your left foot or ankle.",
    "Gently pull your left foot towards your glutes, feeling a stretch in your left quad.",
    "Hold the stretch for 20-30 seconds, then release.",
    "Repeat with your right leg."
    ],
    "name":"assisted prone lying quads stretch",
    "secondaryMuscles":[
    "hamstrings",
    "glutes"
    ],
    "target":"quads"
    },
    {
    "bodyPart":"upper legs",
    "equipment":"assisted",
    "gifUrl":"https://v2.exercisedb.io/image/rl3JNZQ96Fszpw",
    "id":"1712",
    "instructions":[
    "Lie on your side with your legs straight and stacked on top of each other.",
    "Bend your bottom leg slightly for stability.",
    "Place your top foot on a stable surface, such as a bench or step.",
    "Keeping your top leg straight, slowly lower it towards the ground, feeling a stretch in your inner thigh.",
    "Hold the stretch for 20-30 seconds.",
    "Return to the starting position and repeat on the other side."
    ],
    "name":"assisted side lying adductor stretch",
    "secondaryMuscles":[
    "hamstrings",
    "glutes"
    ],
    "target":"adductors"
    },
    {
    "bodyPart":"upper legs",
    "equipment":"body weight",
    "gifUrl":"https://v2.exercisedb.io/image/0XXN6vhSk3HJES",
    "id":"1473",
    "instructions":[
    "Stand with your feet shoulder-width apart.",
    "Bend your knees slightly and jump backwards, pushing off with both feet.",
    "Land softly on the balls of your feet, bending your knees to absorb the impact.",
    "Repeat for the desired number of repetitions."
    ],
    "name":"backward jump",
    "secondaryMuscles":[
    "hamstrings",
    "glutes",
    "calves"
    ],
    "target":"quads"
    },
    {
    "bodyPart":"upper legs",
    "equipment":"body weight",
    "gifUrl":"https://v2.exercisedb.io/image/8UTXb0dZyNKxHS",
    "id":"0020",
    "instructions":[
    "Place the balance board on a flat surface.",
    "Step onto the balance board with one foot, ensuring it is centered.",
    "Slowly shift your weight onto the foot on the balance board, keeping your core engaged.",
    "Maintain your balance and stability as you hold the position for a desired amount of time.",
    "Repeat the exercise with the other foot."
    ],
    "name":"balance board",
    "secondaryMuscles":[
    "calves",
    "hamstrings",
    "glutes"
    ],
    "target":"quads"
    },
    {
    "bodyPart":"upper legs",
    "equipment":"band",
    "gifUrl":"https://v2.exercisedb.io/image/Tbqp3pHxqRrNjT",
    "id":"0980",
    "instructions":[
    "Attach the band to a sturdy anchor point at ankle height.",
    "Stand facing away from the anchor point with your feet shoulder-width apart.",
    "Step back to create tension in the band, keeping your knees slightly bent.",
    "Hinge at the hips and lean forward, maintaining a neutral spine.",
    "Extend your right leg straight back, squeezing your glutes at the top.",
    "Lower your right leg back down and repeat with the left leg.",
    "Continue alternating legs for the desired number of repetitions."
    ],
    "name":"band bent-over hip extension",
    "secondaryMuscles":[
    "hamstrings",
    "lower back"
    ],
    "target":"glutes"
    }
      ],
      waist: [
        
{
    "bodyPart":"waist",
    "equipment":"body weight",
    "gifUrl":"https://v2.exercisedb.io/image/pmxUez4n6-Neyx",
    "id":"0001",
    "instructions":[
    "Lie flat on your back with your knees bent and feet flat on the ground.",
    "Place your hands behind your head with your elbows pointing outwards.",
    "Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.",
    "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
    "Repeat for the desired number of repetitions."
    ],
    "name":"3/4 sit-up",
    "secondaryMuscles":[
    "hip flexors",
    "lower back"
    ],
    "target":"abs"
    },
    {
    "bodyPart":"waist",
    "equipment":"body weight",
    "gifUrl":"https://v2.exercisedb.io/image/oZ3-cTbInjJIBw",
    "id":"0002",
    "instructions":[
    "Stand with your feet shoulder-width apart and your arms extended straight down by your sides.",
    "Keeping your back straight and your core engaged, slowly bend your torso to one side, lowering your hand towards your knee.",
    "Pause for a moment at the bottom, then slowly return to the starting position.",
    "Repeat on the other side.",
    "Continue alternating sides for the desired number of repetitions."
    ],
    "name":"45° side bend",
    "secondaryMuscles":[
    "obliques"
    ],
    "target":"abs"
    },
    {
    "bodyPart":"waist",
    "equipment":"body weight",
    "gifUrl":"https://v2.exercisedb.io/image/Z-hniEqxR3TouE",
    "id":"0003",
    "instructions":[
    "Lie flat on your back with your hands placed behind your head.",
    "Lift your legs off the ground and bend your knees at a 90-degree angle.",
    "Bring your right elbow towards your left knee while simultaneously straightening your right leg.",
    "Return to the starting position and repeat the movement on the opposite side, bringing your left elbow towards your right knee while straightening your left leg.",
    "Continue alternating sides in a pedaling motion for the desired number of repetitions."
    ],
    "name":"air bike",
    "secondaryMuscles":[
    "hip flexors"
    ],
    "target":"abs"
    },
    {
    "bodyPart":"waist",
    "equipment":"body weight",
    "gifUrl":"https://v2.exercisedb.io/image/zAtHZgSqWTwnW6",
    "id":"0006",
    "instructions":[
    "Lie flat on your back with your knees bent and feet flat on the ground.",
    "Extend your arms straight out to the sides, parallel to the ground.",
    "Engaging your abs, lift your shoulders off the ground and reach your right hand towards your right heel.",
    "Return to the starting position and repeat on the left side, reaching your left hand towards your left heel.",
    "Continue alternating sides for the desired number of repetitions."
    ],
    "name":"alternate heel touchers",
    "secondaryMuscles":[
    "obliques"
    ],
    "target":"abs"
    },
    {
    "bodyPart":"waist",
    "equipment":"body weight",
    "gifUrl":"https://v2.exercisedb.io/image/kcM35uOEc53Cug",
    "id":"2355",
    "instructions":[
    "Hang from a pull-up bar with your arms fully extended and your knees bent at a 90-degree angle.",
    "Engage your core and lift your knees towards your chest, bringing them as close to your elbows as possible.",
    "Slowly lower your legs back down to the starting position.",
    "Repeat for the desired number of repetitions."
    ],
    "name":"arm slingers hanging bent knee legs",
    "secondaryMuscles":[
    "shoulders",
    "back"
    ],
    "target":"abs"
    },
    {
    "bodyPart":"waist",
    "equipment":"body weight",
    "gifUrl":"https://v2.exercisedb.io/image/WeTGp7dpBpo47V",
    "id":"2333",
    "instructions":[
    "Hang from a pull-up bar with your arms fully extended and your legs straight down.",
    "Engage your core and lift your legs up in front of you until they are parallel to the ground.",
    "Hold for a moment at the top, then slowly lower your legs back down to the starting position.",
    "Repeat for the desired number of repetitions."
    ],
    "name":"arm slingers hanging straight legs",
    "secondaryMuscles":[
    "shoulders",
    "back"
    ],
    "target":"abs"
    },
    {
    "bodyPart":"waist",
    "equipment":"body weight",
    "gifUrl":"https://v2.exercisedb.io/image/3snRbRUzkPBQma",
    "id":"3204",
    "instructions":[
    "Lie flat on your back with your knees bent and feet flat on the ground.",
    "Extend your arms overhead, keeping them straight.",
    "Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is upright.",
    "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
    "Repeat for the desired number of repetitions."
    ],
    "name":"arms overhead full sit-up (male)",
    "secondaryMuscles":[
    "hip flexors",
    "lower back"
    ],
    "target":"abs"
    },
    {
    "bodyPart":"waist",
    "equipment":"assisted",
    "gifUrl":"https://v2.exercisedb.io/image/liRHu4QPOY7Nbu",
    "id":"0011",
    "instructions":[
    "Hang from a pull-up bar with your arms fully extended and your palms facing away from you.",
    "Engage your core muscles and lift your knees towards your chest, bending at the hips and knees.",
    "Pause for a moment at the top of the movement, squeezing your abs.",
    "Slowly lower your legs back down to the starting position.",
    "Repeat for the desired number of repetitions."
    ],
    "name":"assisted hanging knee raise",
    "secondaryMuscles":[
    "hip flexors"
    ],
    "target":"abs"
    },
    {
    "bodyPart":"waist",
    "equipment":"assisted",
    "gifUrl":"https://v2.exercisedb.io/image/o2HsRZHYYImEVZ",
    "id":"0010",
    "instructions":[
    "Hang from a pull-up bar with your arms fully extended and your palms facing away from you.",
    "Engage your core and lift your knees towards your chest, keeping your legs together.",
    "Once your knees are at chest level, explosively throw your legs down towards the ground, extending them fully.",
    "Allow your legs to swing back up and repeat the movement for the desired number of repetitions."
    ],
    "name":"assisted hanging knee raise with throw down",
    "secondaryMuscles":[
    "hip flexors",
    "lower back"
    ],
    "target":"abs"
    },
    {
    "bodyPart":"waist",
    "equipment":"assisted",
    "gifUrl":"https://v2.exercisedb.io/image/jQJcIzPCToLhxt",
    "id":"0012",
    "instructions":[
    "Lie flat on your back with your legs extended and your arms by your sides.",
    "Place your hands under your glutes for support.",
    "Engage your abs and lift your legs off the ground, keeping them straight.",
    "While keeping your legs together, lower them to one side until they are a few inches above the ground.",
    "Pause for a moment, then lift your legs back to the starting position.",
    "Repeat the movement to the other side.",
    "Continue alternating sides for the desired number of repetitions."
    ],
    "name":"assisted lying leg raise with lateral throw down",
    "secondaryMuscles":[
    "hip flexors",
    "obliques"
    ],
    "target":"abs"
    }
      ]
};

export const dummyData = [
    {
        "bodyPart": "back",
        "equipment": "cable",
        "gifUrl": "https://v2.exercisedb.io/image/2Dl5yJQ5604fMO",
        "id": "0007",
        "instructions": [
            "Sit on the cable machine with your back straight and feet flat on the ground.",
            "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
            "Lean back slightly and pull the handles towards your chest, squeezing your shoulder blades together.",
            "Pause for a moment at the peak of the movement, then slowly release the handles back to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "alternate lateral pulldown",
        "secondaryMuscles": [
            "biceps",
            "rhomboids"
        ],
        "target": "lats"
    },
    {
        "bodyPart": "back",
        "equipment": "body weight",
        "gifUrl": "https://v2.exercisedb.io/image/mtQZw5QQLyvfkH",
        "id": "3293",
        "instructions": [
            "Start by hanging from a pull-up bar with an overhand grip, slightly wider than shoulder-width apart.",
            "Engage your core and pull your shoulder blades down and back.",
            "As you pull yourself up, bend one arm and bring your elbow towards your side, while keeping the other arm straight.",
            "Continue pulling until your chin is above the bar and your bent arm is fully flexed.",
            "Lower yourself back down with control, straightening the bent arm and repeating the movement on the other side.",
            "Alternate sides with each repetition."
        ],
        "name": "archer pull up",
        "secondaryMuscles": [
            "biceps",
            "forearms"
        ],
        "target": "lats"
    },
    {
        "bodyPart": "back",
        "equipment": "leverage machine",
        "gifUrl": "https://v2.exercisedb.io/image/ehcFoVjEihdM1z",
        "id": "0015",
        "instructions": [
            "Adjust the machine to your desired weight and height.",
            "Place your hands on the parallel bars with a close grip, palms facing each other.",
            "Hang from the bars with your arms fully extended and your feet off the ground.",
            "Engage your back muscles and pull your body up towards the bars, keeping your elbows close to your body.",
            "Continue pulling until your chin is above the bars.",
            "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "assisted parallel close grip pull-up",
        "secondaryMuscles": [
            "biceps",
            "forearms"
        ],
        "target": "lats"
    },
    {
        "bodyPart": "back",
        "equipment": "leverage machine",
        "gifUrl": "https://v2.exercisedb.io/image/M9wA2akBvy7ikD",
        "id": "0017",
        "instructions": [
            "Adjust the machine to your desired weight and height settings.",
            "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
            "Hang with your arms fully extended and your feet off the ground.",
            "Engage your back muscles and pull your body up towards the handles, keeping your elbows close to your body.",
            "Continue pulling until your chin is above the handles.",
            "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "assisted pull-up",
        "secondaryMuscles": [
            "biceps",
            "forearms"
        ],
        "target": "lats"
    },
    {
        "bodyPart": "back",
        "equipment": "leverage machine",
        "gifUrl": "https://v2.exercisedb.io/image/ZzydBJnKgciSoP",
        "id": "1431",
        "instructions": [
            "Adjust the machine to your desired assistance level.",
            "Stand on the foot platform and grip the handles with an overhand grip, slightly wider than shoulder-width apart.",
            "Keep your chest up and shoulders back, engage your core, and slightly bend your knees.",
            "Pull your body up by flexing your elbows and driving your elbows down towards your sides.",
            "Continue pulling until your chin is above the bar.",
            "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "assisted standing chin-up",
        "secondaryMuscles": [
            "biceps",
            "forearms"
        ],
        "target": "lats"
    },
    {
        "bodyPart": "back",
        "equipment": "leverage machine",
        "gifUrl": "https://v2.exercisedb.io/image/dImJLMaPGahHyX",
        "id": "1432",
        "instructions": [
            "Adjust the machine to your desired weight and height settings.",
            "Stand facing the machine with your feet shoulder-width apart.",
            "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
            "Engage your lats and biceps, and pull yourself up towards the handles.",
            "Pause for a moment at the top, squeezing your back muscles.",
            "Slowly lower yourself back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "assisted standing pull-up",
        "secondaryMuscles": [
            "biceps",
            "forearms"
        ],
        "target": "lats"
    },
    {
        "bodyPart": "back",
        "equipment": "stability ball",
        "gifUrl": "https://v2.exercisedb.io/image/rTFMZKl4I2VeX9",
        "id": "1314",
        "instructions": [
            "Place the stability ball on the ground and lie face down on top of it, with your hips resting on the ball and your feet against a wall or other stable surface.",
            "Position your hands behind your head or crossed over your chest.",
            "Engage your core and slowly lift your upper body off the ball, extending your back until your body forms a straight line from your head to your heels.",
            "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "back extension on exercise ball",
        "secondaryMuscles": [
            "glutes",
            "hamstrings"
        ],
        "target": "spine"
    },
    {
        "bodyPart": "back",
        "equipment": "body weight",
        "gifUrl": "https://v2.exercisedb.io/image/jwCTE46CZ82n4R",
        "id": "3297",
        "instructions": [
            "Start by hanging from a pull-up bar with an overhand grip, hands slightly wider than shoulder-width apart.",
            "Engage your core and pull your shoulder blades down and back.",
            "Bend your knees and tuck them towards your chest.",
            "Slowly lift your legs up, keeping them straight, until your body is parallel to the ground.",
            "Hold this position for a few seconds, then slowly lower your legs back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "back lever",
        "secondaryMuscles": [
            "biceps",
            "forearms",
            "core"
        ],
        "target": "upper back"
    },
    {
        "bodyPart": "back",
        "equipment": "body weight",
        "gifUrl": "https://v2.exercisedb.io/image/7tVp8cxPqRuhmE",
        "id": "1405",
        "instructions": [
            "Stand tall with your feet shoulder-width apart.",
            "Extend your arms straight out in front of you, parallel to the ground.",
            "Cross your arms in front of your body, with your right arm over your left arm.",
            "Interlock your fingers and rotate your palms away from your body.",
            "Slowly raise your arms up and away from your body, feeling a stretch in your back and chest.",
            "Hold the stretch for 15-30 seconds, then release.",
            "Repeat on the opposite side."
        ],
        "name": "back pec stretch",
        "secondaryMuscles": [
            "shoulders",
            "chest"
        ],
        "target": "lats"
    },
    {
        "bodyPart": "back",
        "equipment": "band",
        "gifUrl": "https://v2.exercisedb.io/image/aRwILVGDcvYlLy",
        "id": "0970",
        "instructions": [
            "Attach the band to a pull-up bar or sturdy anchor point.",
            "Step onto the band and grip the bar with your palms facing away from you, hands slightly wider than shoulder-width apart.",
            "Hang with your arms fully extended, keeping your core engaged and your shoulders down and back.",
            "Pull your body up towards the bar by squeezing your shoulder blades together and driving your elbows down towards your hips.",
            "Continue pulling until your chin is above the bar, then slowly lower yourself back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "band assisted pull-up",
        "secondaryMuscles": [
            "biceps",
            "forearms"
        ],
        "target": "lats"
    }

]

