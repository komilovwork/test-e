import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, CheckCircle, AlertCircle } from 'lucide-react';
import { TestResult } from '../../types';
import { Button } from '@/components/ui/button';

interface CodeConsoleProps {
  logs: TestResult[];
  isVisible: boolean;
  onClose: () => void;
}

const CodeConsole: React.FC<CodeConsoleProps> = ({ logs, isVisible, onClose }) => {
  const latestResult = logs[logs.length - 1];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 bg-gray-900 dark:bg-gray-950 border-t border-gray-700 dark:border-gray-800 z-40"
        >
          <div className="flex items-center justify-between px-6 py-3 border-b border-gray-700 dark:border-gray-800">
            <div className="flex items-center space-x-2">
              <Terminal className="w-5 h-5 text-green-400" />
              <span className="text-white font-medium">Test Natijalari</span>
              {latestResult && (
                <div className="flex items-center space-x-1">
                  {latestResult.status === 'success' ? (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  ) : latestResult.status === 'error' ? (
                    <AlertCircle className="w-4 h-4 text-red-400" />
                  ) : (
                    <div className="w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
                  )}
                  <span className={`text-sm ${
                    latestResult.status === 'success' ? 'text-green-400' : 
                    latestResult.status === 'error' ? 'text-red-400' : 'text-yellow-400'
                  }`}>
                    {latestResult.status === 'running' ? 'Bajarilmoqda...' :
                     latestResult.status === 'success' ? 'Muvaffaqiyatli' : 'Xatolik'}
                  </span>
                </div>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-400 hover:text-white hover:bg-gray-800"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="h-64 overflow-y-auto p-4 space-y-2 font-mono text-sm">
            <AnimatePresence>
              {logs.map((result) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500 text-xs">
                      {new Date(result.timestamp).toLocaleTimeString('uz-UZ')}
                    </span>
                    <span className={`${
                      result.status === 'success' ? 'text-green-400' :
                      result.status === 'error' ? 'text-red-400' : 'text-yellow-400'
                    }`}>
                      {result.message}
                    </span>
                  </div>
                  {result.details && (
                    <div className="ml-16 space-y-1">
                      {result.details.map((detail, index) => (
                        <div key={index} className="text-gray-300 text-xs">
                          {detail}
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {logs.length === 0 && (
              <div className="text-gray-500 text-center py-8">
                Hozircha test natijalari yo'q. "Tekshirish" tugmasini bosing.
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CodeConsole;