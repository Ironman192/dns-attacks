export const DnsSpoofingQuizQuestions = {
    "quizTitle": "DNS Spoofing",
    "progressBarColor": "#9de1f6",
    "questions": [
        {
        "question": "What is DNS spoofing?",
        "questionType": "text",
        "answers": [
            "Redirecting DNS traffic to legitimate websites",
            "Tricking DNS resolvers to direct users to malicious websites",
            "Encrypting DNS responses to prevent tampering",
            "Removing outdated IP addresses from DNS caches"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job!!",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "DNS spoofing (or DNS cache poisoning) involves corrupting the cache of a DNS resolver so that it returns incorrect IP addresses, directing users to malicious websites instead of the intended destinations. This attack is used by hackers to steal sensitive information or distribute malware.",
        "point": "1"
        },
        {
        "question": "What type of attack can facilitate a DNS spoofing attack?",
        "questionType": "text",
        "answers": [
            "VPN tunneling",
            "TCP handshakes",
            "ARP spoofing",
            "Port scanning"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Correct answer. Good job!!",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "ARP spoofing enables attackers to intercept and manipulate data between a device and a DNS server on a local network by impersonating the network’s gateway. This \"man-in-the-middle\" setup can then be used to perform DNS spoofing.",
        "point": "1"
        },
        {
        "question": "In an ARP spoofing attack, what does the attacker use to intercept communications between devices on a network?",
        "questionType": "text",
        "answers": [
            "Malicious DNS requests",
            "Forged ARP responses",
            "Encrypted VPNs",
            "Legitimate MAC addresses"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job!!",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "In an ARP spoofing attack, attackers send falsified ARP (Address Resolution Protocol) responses to trick devices into sending their traffic to the attacker’s device. This allows the attacker to intercept or alter communications.",
        "point": "1"
        },
        {
        "question": "What is one key reason DNS cache poisoning can occur?",
        "questionType": "text",
        "answers": [
            "DNS requests use TCP, which is vulnerable to attack",
            "DNS resolvers often skip DNS caches",
            "DNS requests use UDP, which lacks verification",
            "DNS servers check MAC addresses for verification"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Correct answer. Good job!!",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "DNS requests typically use the UDP protocol, which does not include built-in verification mechanisms. This lack of verification allows attackers to inject malicious data into DNS responses, leading to cache poisoning.",
        "point": "1"
        },
        {
        "question": "Which protocol can help prevent DNS cache poisoning by verifying the authenticity of DNS responses?",
        "questionType": "text",
        "answers": [
            "DNSSEC",
            "ARP",
            "UDP",
            "LAN"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Correct answer. Good job!!",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "DNSSEC (Domain Name System Security Extensions) is a security protocol that helps protect against DNS spoofing and cache poisoning by adding cryptographic signatures to DNS records, allowing DNS resolvers to verify the authenticity of responses.",
        "point": "1"
        },
    ],
    "appLocale": {
        "landingHeaderText": "<questionLength> Questions",
        "question": "Question",
        "startQuizBtn": "Start Quiz",
        "resultFilterAll": "All",
        "resultFilterCorrect": "Correct",
        "resultFilterIncorrect": "Incorrect",
        "prevQuestionBtn": "Prev",
        "nextQuestionBtn": "Next",
        "resultPageHeaderText": "You have completed the quiz. You got <correctIndexLength> out of <questionLength> questions."
    } 
} 