"use client";

import { playDemoAudio } from "~/lib/demo-audio";

import { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { GenerateButton } from "~/components/client/generate-button";
import { useVoiceStore } from "~/stores/voice-store";
import { ServiceType } from "~/types/services";

const ALLOWED_AUDIO_TYPES = ["audio/mpeg", "audio/mp3", "audio/wav", "audio/x-wav"];

export function VoiceChanger({
  credits,
  service,
}: {
  credits: number;
  service: ServiceType;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const isLoading = false;

  const getSelectedVoice = useVoiceStore((state) => state.getSelectedVoice);

  const handleFileSelect = (selectedFile: File) => {
    const isAllowedAudio = ALLOWED_AUDIO_TYPES.includes(selectedFile.type);
    const isUnder50MB = selectedFile.size <= 50 * 1024 * 1024;

    if (isAllowedAudio && isUnder50MB) {
      setFile(selectedFile);
    } else {
      alert(
        isAllowedAudio
          ? "File is too large. Max size is 50MB"
          : "Please select an MP3 or WAV file only",
      );
    }
  };

  const handleGenerateSpeech = () => {
    const selectedVoice = getSelectedVoice("seedvc");
    if (!file || !selectedVoice) return;
    playDemoAudio(file.name, selectedVoice.id, service);
  };


  return (
    <>
      <div className="flex flex-1 flex-col justify-between px-4">
        <div className="flex flex-1 items-center justify-center py-8">
          <div
            className={`w-full max-w-xl rounded-2xl border-2 border-dotted p-8 transition-all duration-200 ${isDragging ? "border-blue-400 bg-blue-50" : "border-gray-300"} ${file ? "bg-white" : "bg-gray-50"}`}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragging(false);

              if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                const file = e.dataTransfer.files[0];
                if (file) {
                  handleFileSelect(file);
                }
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Choose an MP3 or WAV file"
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); e.currentTarget.click(); } }}
            onClick={() => {
              if (isLoading) return;

              const input = document.createElement("input");
              input.type = "file";
              input.accept = ".mp3,.wav,audio/mpeg,audio/wav";
              input.onchange = (e) => {
                const target = e.target as HTMLInputElement;
                if (target.files && target.files.length > 0) {
                  const file = target.files[0];
                  if (file) {
                    handleFileSelect(file);
                  }
                }
              };
              input.click();
            }}
          >
            {file ? (
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-lg border border-gray-200 bg-white p-3">
                  <FaUpload className="h-4 w-4 text-blue-400" />
                </div>
                <p className="mb-1 text-sm font-medium">{file.name}</p>
                <p className="mb-1 text-sm font-medium">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isLoading) {
                      setFile(null);
                    }
                  }}
                  disabled={isLoading}
                  className={`mt-2 text-sm ${isLoading ? "cursor-not-allowed text-gray-400" : "text-blue-600 hover:text-blue-800"}`}
                >
                  Choose a different file
                </button>
              </div>
            ) : (
              <div className="flex cursor-pointer flex-col items-center py-8 text-center">
                <div className="mb-4 rounded-lg border border-gray-200 bg-white p-3">
                  <FaUpload className="h-4 w-4 text-gray-500" />
                </div>
                <p className="mb-1 text-sm font-medium">
                  Click to upload, or drag and drop
                </p>
                <p className="text-xs text-gray-500">
                  MP3 or WAV files only, up to 50MB
                </p>
              </div>
            )}
          </div>
        </div>

        <GenerateButton
          onGenerate={handleGenerateSpeech}
          isDisabled={!file || isLoading}
          isLoading={isLoading}
          showDownload={true}
          creditsRemaining={credits}
          buttonText="Convert Voice"
        />
      </div>
    </>
  );
}

