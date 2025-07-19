import React from "react";
import {
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, gitUrl, icon }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        boxShadow: "0 25px 50px rgba(147, 51, 234, 0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      className="h-full flex flex-col bg-gradient-to-br from-slate-800/40 to-purple-900/20 rounded-2xl overflow-hidden border border-purple-500/30 backdrop-blur-sm group hover:border-purple-400/60 transition-all duration-500"
    >
      <div className="p-6 flex-1 flex flex-col relative">
        {/* Background glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10">
          <div className="flex justify-between items-center mb-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative p-3 rounded-xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30"
            >
              {icon || <CodeBracketIcon className="h-6 w-6 text-purple-400" />}

              {/* Glowing ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-xl border border-purple-400/20"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <ArrowTopRightOnSquareIcon className="h-5 w-5 text-purple-400" />
            </motion.div>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
            {title}
          </h3>
          <p className="text-gray-300 flex-1 leading-relaxed mb-6">
            {description}
          </p>

          <div className="mt-auto pt-4 border-t border-purple-500/20">
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-3 text-purple-400 hover:text-white transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <CodeBracketIcon className="h-5 w-5" />
              </motion.div>
              <span className="font-semibold">View Code</span>
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                className="ml-auto opacity-0 group-hover/link:opacity-100 transition-all"
              >
                →
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-4 right-4 w-2 h-2 bg-purple-400/40 rounded-full"
        />
        <motion.div
          animate={{ y: [2, -2, 2] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-8 left-4 w-1.5 h-1.5 bg-blue-400/40 rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
