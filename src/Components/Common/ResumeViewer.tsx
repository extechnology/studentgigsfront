import React from 'react';

interface ResumeViewerProps {
    resumeUrl: string | null;
    isOpen: boolean;
    onRequestClose: () => void;
}

const ResumeViewer: React.FC<ResumeViewerProps> = ({ resumeUrl, isOpen, onRequestClose }) => {

    if (!isOpen || !resumeUrl) return null; 

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg w-full max-w-3xl p-6 shadow-lg relative">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-900">Resume Preview</h2>
                    <button
                        onClick={onRequestClose}
                        className="text-gray-500 hover:text-gray-700 text-2xl font-semibold"
                    >
                        &times;
                    </button>
                </div>

                <div className="mt-4">
                    {/* Check if the resume URL is a PDF and render accordingly */}
                    {resumeUrl && resumeUrl.endsWith('.pdf') ? (
                        <iframe
                            src={resumeUrl}
                            title="Resume Preview"
                            width="100%"
                            height="600px"
                            className="border-0 rounded-lg"
                        />
                    ) : (
                        <div className="w-full flex justify-center items-center text-gray-500">
                            <p>File format not supported for preview. Please download to view it.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResumeViewer;
