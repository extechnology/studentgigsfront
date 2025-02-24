import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function JobApplicationSuccess() {
    return (
        <div className="flex min-h-screen items-center justify-center p-6">
            <div className="max-w-lg w-full bg-white p-8 rounded-2xl shadow-xl text-center">
                <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
                <h1 className="text-2xl font-semibold text-gray-800">Application Submitted Successfully!</h1>
                <p className="text-gray-600 mt-2">
                    Your application has been successfully submitted. You will receive an email if you are shortlisted.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                    <p className="text-gray-700 text-sm"> We will review your application and get back to you soon.</p>
                </div>
                <div className="mt-6 space-y-6">
                    <Link to={'/'}>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                            Go to Home
                        </Button>
                    </Link>
                    <Link to={'/jobfilter'}>
                        <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                            Browse More Jobs <ArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
