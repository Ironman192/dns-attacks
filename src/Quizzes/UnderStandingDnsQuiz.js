export const UnderstandingDnsQuizQuestions = {
    "quizTitle": "Understanding DNS ",
    "progressBarColor": "#9de1f6",
    "questions": [
        {
        "question": "What is the primary role of the Domain Name System (DNS)?",
        "questionType": "text",
        "answers": [
            "To connect computers to Wi-Fi networks",
            "To convert domain names into IP addresses",
            "To store all websites on the internet",
            "To speed up internet browsing"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job!!",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "DNS translates human-readable domain names into machine-readable IP addresses, enabling connections to specific servers on the internet.",
        "point": "1"
        },
        {
        "question": "Which component in a DNS lookup is responsible for making additional requests to fulfill a DNS query?",
        "questionType": "text",
        "answers": [
            "Root nameserver",
            "TLD nameserver",
            "DNS recursive resolver",
            "Authoritative nameserver"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Correct answer. Good job!!",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "The DNS recursive resolver takes the initial query from the client and queries the appropriate nameservers to find the IP address.",
        "point": "1"
        },
        {
        "question": "What is the function of a TLD nameserver in a DNS lookup?",
        "questionType": "text",
        "answers": [
            " It provides the IP address of the domain",
            "It directs the resolver to the appropriate authoritative nameserver based on the domain suffix (e.g., \".com\")",
            "It caches DNS records to speed up lookups",
            "It resolves the domain name to an IP address directly"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job!!",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "The TLD nameserver directs the recursive resolver to the authoritative nameserver for the specific domain suffix.",
        "point": "1"
        },
        {
        "question": "Which of these DNS records would you use to map a domain name to its IPv6 address?",
        "questionType": "text",
        "answers": [
            "A Record",
            "MX Record",
            "CNAME Record",
            "AAAA Record"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Correct answer. Good job!!",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "AAAA records store IPv6 addresses, whereas A records store IPv4 addresses.",
        "point": "1"
        },
        {
        "question": "What is the purpose of DNS caching?",
        "questionType": "text",
        "answers": [
            "To store websites for offline use",
            "To temporarily store DNS data to improve lookup speed and reduce network traffic",
            "To allow internet access during outages",
            "To store IP addresses of frequently visited websites permanently"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job!!",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "DNS caching temporarily stores DNS records locally to speed up future requests and reduce the load on DNS servers.",
        "point": "1"
        },
        {
            "question": "Which of the following is the first step in the DNS lookup process?",
            "questionType": "text",
            "answers": [
                "The DNS recursive resolver queries the TLD nameserver",
                "The client queries the DNS recursive resolver",
                " The DNS resolver checks its cache",
                "The browser sends a request directly to the authoritative nameserver"
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": "Correct answer. Good job!!",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "The first step is the client querying the DNS recursive resolver, which then begins the process of finding the IP address.",
            "point": "1"
        },
        {
            "question": "What would happen if the DNS system did not exist?",
            "questionType": "text",
            "answers": [
                "Users would have to remember IP addresses to visit websites",
                "The internet would be faster due to fewer DNS lookups",
                "Websites would not be accessible at all",
                "Only IPv6 addresses would work"
            ],
            "correctAnswer": "1",
            "messageForCorrectAnswer": "Correct answer. Good job!!",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Without DNS, users would need to remember numerical IP addresses for each website, making browsing far less convenient.",
            "point": "1"
        },
        {
            "question": "What type of DNS record is responsible for directing email messages to the correct server?",
            "questionType": "text",
            "answers": [
                "CNAME Record",
                "A Record",
                "MX Record",
                "AAAA Record"
            ],
            "correctAnswer": "3",
            "messageForCorrectAnswer": "Correct answer. Good job!!",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "MX (Mail Exchange) Records specify the mail servers responsible for receiving email for a domain.",
            "point": "1"
        },
        {
            "question": "Which DNS server is responsible for knowing the IP address of a specific domain and is the final stop in the DNS lookup process?",
            "questionType": "text",
            "answers": [
                "Root nameserver",
                "TLD nameserver",
                "DNS recursive resolver",
                "Authoritative nameserver"
            ],
            "correctAnswer": "4",
            "messageForCorrectAnswer": "Correct answer. Good job!!",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "The authoritative nameserver has the final answer to the query, holding the actual IP address of the requested domain.",
            "point": "1"
        },
        {
            "question": "What is one primary benefit of DNS caching within a browser or ISP’s recursive resolver?",
            "questionType": "text",
            "answers": [
                "It ensures data security on the internet",
                "It reduces the need for domain name registrations",
                "It decreases the time required to load websites by storing recent DNS records",
                "It eliminates the need for DNS root nameservers"
            ],
            "correctAnswer": "3",
            "messageForCorrectAnswer": "Correct answer. Good job!!",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "DNS caching allows recent DNS records to be temporarily stored, reducing the time needed to load websites by eliminating repeated queries through the entire DNS lookup process.",
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