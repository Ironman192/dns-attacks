export const DnsTunnelingQuizQuestions = {
    "quizTitle": "DNS Tunneling",
    "progressBarColor": "#9de1f6",
    "questions": [
        {
        "question": "What is the primary purpose of a DNS tunneling attack?",
        "questionType": "text",
        "answers": [
            "To prevent DNS traffic from being monitored",
            "To exfiltrate data or bypass network restrictions by embedding data within DNS queries and responses",
            "To redirect legitimate DNS queries to a malicious server",
            "To make DNS servers run faster by increasing their query capacity"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job!!",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "DNS tunneling attacks are used by attackers to exfiltrate data or bypass network security by embedding data within DNS traffic, allowing communication without raising suspicions.",
        "point": "1"
        },
        {
        "question": "How does DNS tunneling malware typically encode data for transmission?",
        "questionType": "text",
        "answers": [
            "Using hexadecimal encoding",
            "Using base64 or similar encoding schemes",
            "Using plain text",
            "Using image files"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job!!",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "DNS tunneling malware often uses encoding schemes like base64 to ensure that the data can fit into DNS queries in a format that can be transmitted through the protocol.",
        "point": "1"
        },
        {
        "question": "What role does the attacker’s domain play in a DNS tunneling attack?",
        "questionType": "text",
        "answers": [
            "It is used to receive the data being exfiltrated from the victim’s device.",
            "It redirects traffic to legitimate DNS servers.",
            "It prevents DNS tunneling by blocking suspicious traffic.",
            "It acts as a firewall to stop malware from infecting devices."
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Correct answer. Good job!!",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "The attacker registers a domain (e.g., \"example.com\") that receives encoded data from infected devices through DNS queries, allowing the attacker to exfiltrate data or send commands.",
        "point": "1"
        },
        {
        "question": "Which of the following might indicate a DNS tunneling attack?",
        "questionType": "text",
        "answers": [
            "Very low DNS traffic volume",
            "Commonly requested domain names",
            "Unusually long or high-volume DNS responses with strange characters",
            "Decreased firewall activity"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Correct answer. Good job!!",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "DNS tunneling responses tend to be unusually long, may contain strange characters, or have a high volume of traffic, which differs from typical DNS traffic patterns.",
        "point": "1"
        },
        {
        "question": "Which of the following can help prevent DNS tunneling attacks?",
        "questionType": "text",
        "answers": [
            "Allowing direct access to external DNS servers",
            "Blocking access to all DNS traffic",
            "Limiting access to only well-known websites",
            "Implementing DNS filtering and monitoring for anomalies"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Correct answer. Good job!!",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "DNS filtering and monitoring DNS traffic for unusual patterns or anomalies can help prevent DNS tunneling attacks by identifying or blocking suspicious activity.",
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