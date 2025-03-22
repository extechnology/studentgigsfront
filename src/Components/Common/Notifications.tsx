import { useState } from "react";
import { Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { Bell, AlertCircle, ChevronRight, Briefcase, MapPin, Calendar } from "lucide-react";
import { PlanData } from "@/Context/AuthContext";
import { motion } from "framer-motion";


// Interface for notification items
interface BaseNotification {
    id: number;
    postedAt: string;
    isRead: boolean;
}

interface JobNotification extends BaseNotification {
    type: 'job';
    title: string;
    company: string;
    location: string;
}

interface PlanNotification extends BaseNotification {
    type: 'plan';
    title: string;
    description: string;
}

type NotificationItem = JobNotification | PlanNotification;


// Interface for Crown component
interface CrownProps {
    className?: string;
}

// Interface for NotificationPopover component
interface NotificationPopoverProps {
    isAuthenticated: boolean;
    isPlanExpired: boolean;
    plan: PlanData | null;
    color: boolean;
}

const NotificationPopover: React.FC<NotificationPopoverProps> = ({
    isAuthenticated,
    plan,
    isPlanExpired,
    color
}) => {



    // Sample notifications data
    const [notifications, setNotifications] = useState<NotificationItem[]>([
        {
            id: 2,
            type: 'job',
            title: 'UX Designer',
            company: 'Creative Solutions',
            location: 'Remote',
            postedAt: '2 hours ago',
            isRead: false,
        },
        {
            id: 3,
            type: 'plan',
            title: 'Premium Plan Expiring',
            description: 'Your premium plan will expire in 3 days',
            postedAt: '1 day ago',
            isRead: false,
        },
        {
            id: 4,
            type: 'job',
            title: 'Frontend Developer',
            company: 'Tech Innovators',
            location: 'New York, NY',
            postedAt: '3 hours ago',
            isRead: true,
        },
        {
            id: 5,
            type: 'job',
            title: 'Product Manager',
            company: 'Global Systems',
            location: 'San Francisco, CA',
            postedAt: '1 day ago',
            isRead: true,
        },
        {
            id: 6,
            type: 'plan',
            title: 'New Features Available',
            description: 'Check out new premium features in your plan',
            postedAt: '2 days ago',
            isRead: true,
        }
    ]);


 

    const unreadCount = notifications.filter(n => !n.isRead).length;



    const handleClearNotifications = () => {
        setNotifications([]);
        // API call to clear notifications
    };



    const handleMarkAllAsRead = () => {
        setNotifications(prev =>
            prev.map(notification => ({
                ...notification,
                isRead: true
            }))
        );
        // API call to mark all as read
    };



    const handleNotificationClick = (id: number) => {
        setNotifications(prev =>
            prev.map(notification =>
                notification.id === id
                    ? { ...notification, isRead: true }
                    : notification
            )
        );
        // API call to mark notification as read
    };



    const renderNotificationContent = () => {


        // Not authenticated
        if (!isAuthenticated) {
            return (
                <div className="p-6 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <AlertCircle className="h-16 w-16 text-gray-400 mb-3" />
                    </motion.div>
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Sign in to view notifications</h3>
                        <p className="text-sm text-gray-500 mb-4">Sign in to your account to access your notifications</p>
                        <Link
                            to="/auth"
                            className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-all hover:shadow-lg inline-block"
                        >
                            Sign In
                        </Link>
                    </motion.div>
                </div>
            );
        }




        // Plan expired or notifications not included in plan
        if (isPlanExpired || plan?.job_alerts_and_notifications?.toLowerCase() !== "yes") {
            return (
                <div className="p-6 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Crown className="h-16 w-16 text-amber-400 mb-3" />
                    </motion.div>
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Upgrade your plan</h3>
                        <p className="text-sm text-gray-500 mb-4">
                            {isPlanExpired
                                ? "Your plan has expired. Upgrade to access notifications."
                                : "Notifications aren't included in your current plan."}
                        </p>
                        <Link
                            to="/plans"
                            className="bg-gradient-to-r from-amber-400 to-amber-600 text-white px-6 py-2.5 rounded-full font-medium hover:from-amber-500 hover:to-amber-700 transition-all hover:shadow-lg inline-block"
                        >
                            Upgrade Now
                        </Link>
                    </motion.div>
                </div>
            );
        }

        

        // Show notifications
        return (
            <>
                <div className="flex items-center rounded-lg justify-between p-4 border-b border-gray-100 sticky top-0 bg-white z-10 backdrop-blur-sm bg-white/90">


                    <h3 className="font-semibold text-gray-900">Notifications</h3>


                    <div className="flex space-x-2">
                        {notifications.length > 0 && unreadCount > 0 && (
                            <button
                                onClick={handleMarkAllAsRead}
                                className="text-xs text-gray-600 hover:text-gray-800 font-medium"
                            >
                                Mark all as read
                            </button>
                        )}
                        {notifications.length > 0 && (
                            <button
                                onClick={handleClearNotifications}
                                className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                            >
                                Clear All
                            </button>
                        )}
                    </div>
                </div>

                <div className="max-h-96 overflow-y-auto custom-scrollbar">
                    {notifications.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="relative"
                            >
                                <motion.div
                                    animate={{
                                        y: [0, -5, 0],
                                        rotate: [0, -5, 0, 5, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "loop"
                                    }}
                                >
                                    <Bell className="h-16 w-16 text-blue-300" />
                                </motion.div>
                                <motion.div
                                    className="absolute top-0 left-1/2 -ml-8 w-16 h-16"
                                    initial={{ opacity: 0.3 }}
                                    animate={{
                                        opacity: [0.3, 0.5, 0.3],
                                        scale: [1, 1.2, 1]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "loop"
                                    }}
                                >
                                    <div className="w-full h-full rounded-full bg-gray-200 opacity-30"></div>
                                </motion.div>
                            </motion.div>
                            <motion.p
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="text-gray-500 text-sm mt-4"
                            >
                                No notifications yet
                            </motion.p>
                            <motion.p
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                className="text-gray-400 text-xs mt-2"
                            >
                                We'll notify you when something important happens
                            </motion.p>
                        </div>
                    ) : (
                        <div className="divide-y divide-gray-100">
                            {notifications.map((notification, index) => (
                                <motion.div
                                    key={notification.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2, delay: index * 0.05 }}
                                    onClick={() => handleNotificationClick(notification.id)}
                                >
                                    <Notification notification={notification} />
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </>
        );
    };

    return (

        <Popover className="relative">
            {({ open }) => (
                <>
                    <Popover.Button className={`relative p-2 rounded-full ${color ? "text-white" : "text-gray-400"} hover:${color ? "bg-white/10" : "bg-gray-100"} focus:outline-none transition-all duration-200`}>
                        <Bell className="h-6 w-6" />
                        {unreadCount > 0 && (
                            <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute top-0 right-0 h-5 w-5 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center transform translate-x-1/3 -translate-y-1/3"
                            >
                                {unreadCount > 9 ? '9+' : unreadCount}
                            </motion.span>
                        )}
                    </Popover.Button>

                    <Transition
                        show={open}
                        enter="transition duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition duration-150 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel className="absolute -right-7 z-10 mt-3 w-[85vh] notification-dropdown max-w-[calc(100vw-20px)] origin-top-right rounded-lg bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
                            {renderNotificationContent()}
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
};



interface NotificationProps {
    notification: NotificationItem;
}



const Notification: React.FC<NotificationProps> = ({ notification }) => {


    const getNotificationLink = (notification: NotificationItem) => {
        if (notification.type === 'job') {
            return `/jobs/${notification.title.toLowerCase().replace(/\s+/g, '-')}`;
        } else {
            return '/plans';
        }
    };



    const getNotificationIcon = (notification: NotificationItem) => {
        if (notification.type === 'job') {
            return <Briefcase className="h-10 w-10 p-2 bg-blue-100 text-blue-600 rounded-full" />;
        } else {
            return <Calendar className="h-10 w-10 p-2 bg-amber-100 text-amber-600 rounded-full" />;
        }
    };



    return (
        <Link
            to={getNotificationLink(notification)}
            className={`flex items-start p-4 hover:bg-gray-50 transition-all ${!notification.isRead ? 'bg-blue-50/70 hover:bg-blue-50' : ''
                }`}
        >
            <div className="flex-shrink-0 mr-3">
                {getNotificationIcon(notification)}
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                    <h4 className={`text-sm font-medium ${!notification.isRead ? 'text-blue-900' : 'text-gray-900'}`}>
                        {notification.title}
                    </h4>
                    <span className="text-xs text-gray-500 ml-2 whitespace-nowrap">{notification.postedAt}</span>
                </div>

                {notification.type === 'job' ? (
                    <div className="mt-1">
                        <div className="flex items-center text-xs text-gray-600 mt-1">
                            <span className="font-medium">{notification.company}</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span>{notification.location}</span>
                        </div>
                    </div>
                ) : (
                    <p className="text-xs text-gray-600 mt-1">{notification.description}</p>
                )}

                <div className={`mt-2 text-xs ${!notification.isRead ? 'text-blue-600' : 'text-gray-500'} font-medium flex items-center`}>
                    View details
                    <ChevronRight className="h-3 w-3 ml-1" />
                </div>
            </div>
        </Link>
    );
};



// Crown component for the plan upgrade section
const Crown: React.FC<CrownProps> = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
    </svg>
);



export default NotificationPopover;