export const DnsHijackingQuizQuestions = {
    "quizTitle": "DNS Hijacking",
    "progressBarColor": "#9de1f6",
    "questions": [
        {
        "question": "What is the primary difference between DNS hijacking and DNS cache poisoning?",
        "questionType": "text",
        "answers": [
            "DNS hijacking changes DNS cache, while DNS cache poisoning changes DNS settings.",
            "DNS hijacking alters DNS settings, while DNS cache poisoning alters DNS cache.",
            "DNS hijacking only affects a local device, while DNS cache poisoning affects an entire network.",
            "DNS hijacking affects ISP servers, while DNS cache poisoning affects routers."
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job!!",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "DNS hijacking changes DNS settings on devices or routers, redirecting DNS queries to malicious servers. DNS cache poisoning, on the other hand, injects false information into a DNS cache, affecting specific lookups for a limited time.",
        "point": "1"
        },
        {
        "question": "In DNS hijacking, what is the main technique used to alter the DNS settings on a local device?",
        "questionType": "text",
        "answers": [
            "SQL injection",
            "Social engineering",
            "Brute-forcing passwords",
            "Installing antivirus software"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job!!",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Attackers often use social engineering, such as phishing emails or fake tech support, to trick users into downloading malware or changing DNS settings on their own devices.",
        "point": "1"
        },
        {
        "question": "Which method of DNS hijacking involves changing the DNS settings on a user’s router?",
        "questionType": "text",
        "answers": [
            "Local hijacking",
            "Router hijacking",
            "Rogue hijacking",
            "ISP hijacking"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job!!",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Router hijacking occurs when attackers gain access to a router and alter its DNS settings, causing all devices on the network to use a rogue DNS server.",
        "point": "1"
        },
        {
        "question": "What is the main goal of rogue DNS hijacking?",
        "questionType": "text",
        "answers": [
            "To alter DNS cache in user devices",
            "To install malware on user devices",
            "To modify DNS records on an ISP’s DNS server",
            "To redirect DNS queries through a VPN server"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Correct answer. Good job!!",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Rogue DNS hijacking involves hacking into an ISP’s DNS server to alter records directly, impacting many users who rely on that DNS server for resolution.",
        "point": "1"
        },
        {
        "question": "Which of the following is an effective prevention measure against DNS hijacking?",
        "questionType": "text",
        "answers": [
            "Using secure DNS services like Google Public DNS or Cloudflare",
            "Disabling the DNS server on your router",
            "Clearing your browser’s cache regularly",
            "Avoiding public Wi-Fi networks"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Correct answer. Good job!!",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Public DNS services like Google Public DNS and Cloudflare offer security features and monitoring that reduce the risk of DNS hijacking.",
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